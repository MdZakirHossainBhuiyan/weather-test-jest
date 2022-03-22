import CountryInfo from "../Components/CountryInfo/CountryInfo";
import { render } from "@testing-library/react";

describe("country info page", () => {
    // test("should render CountryInfo page", () => {
    //     render(<CountryInfo />)
    // })

    test("should render CountryInfo page title", () => {
        const {getByTestId} = render(<h1 data-testid="countryInfoTitle">Information of Bangladesh</h1>)
        expect(getByTestId("countryInfoTitle")).toHaveTextContent("Information of Bangladesh");
    })
})