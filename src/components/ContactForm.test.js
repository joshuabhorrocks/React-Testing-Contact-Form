import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

// test("Testing input boxes", () => {
//     const {getByLabelText} = render(<ContactForm />);
//     getByLabelText(/first name/i);
// });

test('inputs are visible', () => {
    const { getByLabelText } = render(<ContactForm />);
})

test("Form Submit", () => {
    const {getByLabelText, getByText, getByTestId} = render(<ContactForm />);

    const fNameInput = getByLabelText(/First Name/i);
    const lNameInput = getByLabelText(/Last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(fNameInput, { target: {value: "Joshua"} });
    fireEvent.change(lNameInput, { target: {value: "Horrocks"} });
    fireEvent.change(emailInput, { target: {value: "joshua-horrocks@lambdastudents.com"} });
    fireEvent.change(messageInput, { target: {value: "This is a test, please disregard"} });

    expect(fNameInput.value).toBe("Joshua");
    expect(lNameInput.value).toBe("Horrocks");
    expect(emailInput.value).toBe("joshua-horrocks@lambdastudents.com");
    expect(messageInput.value).toBe("This is a test, please disregard");

    fireEvent.click(getByTestId(/submit/i));

    // const formText = getByLabelText('"firstName": "Jay","lastName": "Horrocks","email": "joshua-horrocks@lambdastudents.com","message": "This is a test, please disregard"');
    // expect(formText).toBeInTheDocument();
})
