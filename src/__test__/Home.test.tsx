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

    const setup = () => {
        const utils = render(<Home />)
        const input = utils.getByLabelText('Enter country')
        return {
          input,
          ...utils,
        }
    }

    test('should input field have value', () => {
        const {input} = setup()
        fireEvent.change(input, {target: {value: 'BD'}})
        expect(input.value).toBe('BD')
    })
      
    // test('Test click event', () => {
    //     const mockCallBack = jest.fn();
      
    //     const button = render(<button onClick={mockCallBack}>Submit</button>);
    //     button.getByTestId('button').simulate('click');
    //     expect(mockCallBack.mock.calls.length).toEqual(1);
    // });
});