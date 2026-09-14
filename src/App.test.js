import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { lazy } from 'react';
import { MemoryRouter } from 'react-router-dom';
import App, { AppContent } from './App';
import { vendors } from './components/vendors';
import Services from './components/services';
import Vendors from './components/vendors';
import Projects from './components/projects';
import Contact from './components/contacts';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  window.scrollTo = jest.fn();
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  jest.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(function () {
    fireEvent.play(this);
    return Promise.resolve();
  });
  jest.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(function () {
    fireEvent.pause(this);
  });
});

afterEach(() => jest.restoreAllMocks());

test('pending routes show a centered spinner with an accessible loading status', () => {
  const PendingPage = lazy(() => new Promise(() => {}));
  const pages = Object.fromEntries(['Home', 'About', 'Services', 'Vendors', 'Projects', 'Contact'].map(name => [name, PendingPage]));
  render(<MemoryRouter><AppContent pages={pages} /></MemoryRouter>);
  const status = screen.getByRole('status');
  expect(status).toHaveClass('grid', 'place-items-center');
  expect(within(status).getByText('Loading...')).toHaveClass('sr-only');
  expect(status.querySelector('[aria-hidden="true"]')).toHaveClass('animate-spin', 'motion-reduce:animate-none');
});

test('provides one main landmark separate from site navigation and footer', async () => {
  render(<App />);
  await screen.findByRole('heading', { level: 1 });
  const main = screen.getByRole('main');
  expect(main).toContainElement(screen.getByRole('heading', { level: 1 }));
  expect(main).not.toContainElement(screen.getByRole('navigation'));
  expect(main).not.toContainElement(screen.getByRole('contentinfo'));
  expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute('href', `#${main.id}`);
});

test('mobile navigation hides closed links and supports Escape with focus return', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Open navigation' });
  const panel = document.getElementById(toggle.getAttribute('aria-controls'));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(within(panel).queryByRole('link')).not.toBeInTheDocument();
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  const homeLink = within(panel).getByRole('link', { name: 'Home' });
  expect(homeLink).toHaveAttribute('aria-current', 'page');
  homeLink.focus();
  fireEvent.keyDown(homeLink, { key: 'Escape' });
  expect(panel).not.toBeVisible();
  expect(toggle).toHaveFocus();
});

test('each vendor is represented once and decorative graphics are hidden', async () => {
  const { container } = render(<App />);
  await screen.findByRole('heading', { level: 1 });
  vendors.forEach((vendor) => {
    expect(screen.getAllByRole('img', { name: vendor.name })).toHaveLength(1);
  });
  container.querySelectorAll('svg').forEach((icon) => {
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).toHaveAttribute('focusable', 'false');
  });
});

test('background video plays without visible controls', async () => {
  const { container } = render(<App />);
  await screen.findByRole('heading', { level: 1 });
  const hero = container.querySelector('.hero-section');
  expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  expect(within(hero).queryByRole('button')).not.toBeInTheDocument();
  expect(hero.querySelector('video')).not.toHaveAttribute('controls');
});

test('reduced motion prevents background video autoplay', async () => {
  window.matchMedia.mockImplementation((query) => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  render(<App />);
  await screen.findByRole('heading', { level: 1 });
  expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
  expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
});

test('Services waves keep Home wave dimensions when the hero resizes', () => {
  const measure = jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 390, height: 500 });
  const { container } = render(<Services />);
  const clip = container.querySelector('clipPath');
  const path = clip.querySelector('path');
  expect(clip).toHaveAttribute('clipPathUnits', 'userSpaceOnUse');
  expect(path.getAttribute('d')).toContain('M 0 10 Q 25 25 50 10 T 100 10');
  expect(path.getAttribute('d').split(' L ')[0].match(/Q/g)).toHaveLength(4);
  expect(path.getAttribute('d')).toContain('L 400 490');

  measure.mockReturnValue({ width: 1440, height: 600 });
  fireEvent(window, new Event('resize'));
  expect(path.getAttribute('d')).toContain('M 0 10 Q 25 25 50 10 T 100 10');
  expect(path.getAttribute('d').split(' L ')[0].match(/Q/g)).toHaveLength(15);
  expect(path.getAttribute('d')).toContain('L 1500 590');
});

test('service buttons expose only expanded content', () => {
  render(<Services />);
  const trigger = screen.getByRole('button', { name: 'Consulting' });
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  expect(panel).toHaveAttribute('aria-hidden', 'true');
  expect(panel).toHaveAttribute('inert');
  expect(within(panel).queryByRole('img')).not.toBeInTheDocument();
  expect(panel.querySelector('img')).not.toHaveAttribute('src');
  fireEvent.click(trigger);
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
  expect(panel).toHaveClass('service-panel-open');
  expect(panel).toHaveAttribute('aria-hidden', 'false');
  expect(panel).not.toHaveAttribute('inert');
  expect(within(panel).getByRole('img')).toBeInTheDocument();
  const loadedSource = panel.querySelector('img').getAttribute('src');
  expect(loadedSource).toMatch(/\/images\/optimized\/.*\.webp$/);
  fireEvent.click(trigger);
  expect(trigger).toHaveAttribute('aria-expanded', 'false');
  expect(panel).not.toHaveClass('service-panel-open');
  expect(panel).toHaveAttribute('aria-hidden', 'true');
  expect(panel).toHaveAttribute('inert');
  expect(within(panel).queryByRole('img')).not.toBeInTheDocument();
  expect(panel.querySelector('img')).toHaveAttribute('src', loadedSource);
});

test.each([
  [Vendors, 'Vendor category', 'Control Systems', '2 vendors'],
  [Projects, 'Project category', 'Airports', '3 projects'],
])('category selection updates results and announces their count', (Component, label, category, count) => {
  render(<Component />);
  fireEvent.change(screen.getByRole('combobox', { name: label }), { target: { value: category } });
  expect(screen.getByRole('status')).toHaveTextContent(count);
  expect(screen.getByRole('button', { name: category })).toHaveAttribute('aria-pressed', 'true');
});

test('project buttons open a named native dialog and close it', () => {
  HTMLDialogElement.prototype.showModal = jest.fn(function () { this.setAttribute('open', ''); });
  HTMLDialogElement.prototype.close = jest.fn(function () { this.removeAttribute('open'); });
  render(<Projects />);
  fireEvent.click(screen.getByRole('button', { name: 'Beirut International Airport' }));
  const dialog = screen.getByRole('dialog', { name: 'Beirut International Airport' });
  expect(dialog).toHaveAccessibleDescription(/Located in Beirut/);
  fireEvent.click(within(dialog).getByRole('button', { name: 'Back' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Beirut International Airport' })).toHaveFocus();
  fireEvent.click(screen.getByRole('button', { name: 'Beirut International Airport' }));
  fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Beirut International Airport' })).toHaveFocus();
});

test('client-side navigation updates the title and focuses main content', async () => {
  render(<App />);
  fireEvent.click(within(screen.getByRole('navigation', { name: 'Primary' })).getByRole('link', { name: 'About' }));
  expect(document.title).toBe('About Us | RGA Qatar - Robert Guild Associates');
  expect(screen.getByRole('main')).toHaveFocus();
  expect(await screen.findByRole('heading', { level: 1, name: 'About Us' })).toBeInTheDocument();
  expect(screen.getByRole('main')).toHaveFocus();
});

test.each([
  [true, 'status', 'Message sent successfully!'],
  [false, 'alert', 'Failed to send message. Please try again later.'],
])('contact fields have persistent labels and announce submission outcomes', async (ok, role, message) => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn().mockResolvedValue({ ok });
  try {
    render(<Contact />);
    const fields = {
      'First Name': 'Test',
      'Last Name': 'User',
      Email: 'test@example.com',
      'Phone Number': '+97400000000',
      Subject: 'Accessibility test',
      Message: 'Test message',
    };
    Object.entries(fields).forEach(([label, value]) => {
      const input = screen.getByRole('textbox', { name: label });
      expect(input).toBeRequired();
      userEvent.type(input, value);
    });
    userEvent.click(screen.getByRole('button', { name: 'Send Message' }));
    await waitFor(() => expect(screen.getByRole(role)).toHaveTextContent(message));
    expect(screen.getByRole('textbox', { name: 'Message' })).toHaveValue(ok ? '' : fields.Message);
  } finally {
    global.fetch = originalFetch;
  }
});
