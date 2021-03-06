import React from 'react'
import { render } from '@testing-library/react'
import Button from 'elements/Button'
import { BrowserRouter as Router } from 'react-router-dom'



test("should not allowed clicked if button isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector('span')).toBeInTheDocument();
});

test("should render <a> tag", () => {
    const { container } = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> component", () => {
    const { container } = render(
        <Router>
            <Button href="" type="link"></Button>
        </Router>
    );

    expect(container.querySelector("a")).toBeInTheDocument();
});
