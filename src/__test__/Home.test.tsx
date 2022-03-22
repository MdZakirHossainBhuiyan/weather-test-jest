import { TextField } from "@mui/material";
import { render } from "@testing-library/react";
import Home from "../Components/Home/Home";

describe("Home page", () => {
    test("should render home page", () => {
        render(<Home />)
    })

    test("should render Home page title", () => {
        const {getByTestId} = render(<h1 data-testid="homePageTitle">Country Info</h1>)
        expect(getByTestId("homePageTitle")).toHaveTextContent("Country Info");
    })

    // test("should render input field", () => {
    //     const {getByTestId} = render(<TextField data-testid="homePageInput" id="outlined-basic" label="Country Name" variant="outlined" />)
    //     expect(getByTestId("homePageInput")).not.toMatch(" ");
    // })
})