import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Components/Home/Home";
import {
    elementFinder,
    renderWithMemoryRouter,
} from "../Utilities/testUtilities";

describe("Home page", () => {
    test("should render Home page title", () => {
        renderWithMemoryRouter("/", <Home />);

        expect(screen.getByTestId("homePageTitle")).toHaveTextContent(
            "Country Info"
        );
    });

    test("should render input field", async () => {
        renderWithMemoryRouter("/", <Home />);

        await elementFinder("homePageInput");
    });

    test("should check if button is disable", () => {
        const { getByText } = render(<Home />);
        expect(getByText(/Submit/i).closest('button')).toHaveAttribute('disabled');
    })

    test("should input field have value", () => {
        const comp = renderWithMemoryRouter("/", <Home />);

        const input = comp.getByLabelText("Enter country") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "BD" } });

        expect(input.value).toBe("BD");
    });
});