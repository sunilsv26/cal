import { render, screen } from '@testing-library/react';
import Calendar from './components/calender/calender';


describe('Calendar component', () => {
  it('renders the correct calendar for the given date', () => {
    const date = "01/12/2023";
    render(<Calendar date={date} />);

    expect(screen.getByText('December 2023')).toBeInTheDocument();


    expect(screen.getByText('Su')).toBeInTheDocument();
    expect(screen.getByText('Mo')).toBeInTheDocument();
    expect(screen.getByText('Tu')).toBeInTheDocument();
    expect(screen.getByText('We')).toBeInTheDocument();
    expect(screen.getByText('Th')).toBeInTheDocument();
    expect(screen.getByText('Fr')).toBeInTheDocument();
    expect(screen.getByText('Sa')).toBeInTheDocument();

    expect(screen.getByText('1')).toHaveAttribute("class", "active_date");
  });
});

describe('Calendar component', () => {
  it('renders the correct calendar for the given date', () => {
    const date = "25/8/2022";
    render(<Calendar date={date} />);
    expect(screen.getByText('August 2022')).toBeInTheDocument();

    expect(screen.getByText('Su')).toBeInTheDocument();
    expect(screen.getByText('Mo')).toBeInTheDocument();
    expect(screen.getByText('Tu')).toBeInTheDocument();
    expect(screen.getByText('We')).toBeInTheDocument();
    expect(screen.getByText('Th')).toBeInTheDocument();
    expect(screen.getByText('Fr')).toBeInTheDocument();
    expect(screen.getByText('Sa')).toBeInTheDocument();

    expect(screen.getByText('25')).toHaveAttribute("class", "active_date");
  });

});

describe('Calendar component', () => {
  it('renders Invalid Date for the given date', () => {
    const date = "25/13/2022";

    render(<Calendar date={date} />);

    expect(screen.getByText('Invalid Date')).toBeInTheDocument();
  });
});

describe('Calendar component', () => {
  it('renders No date input provided for the given date', () => {
    const date = "25/13/2022";

    render(<Calendar date={""} />);

    expect(screen.getByText('No date input provided')).toBeInTheDocument();
  });
});