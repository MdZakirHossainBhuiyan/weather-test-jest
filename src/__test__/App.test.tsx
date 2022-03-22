import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../App";
import { elementFinder, renderWithMemoryRouter, textExpecter, textFinderRx } from "../Utilities/testUtilities";

describe("App Router", () => {
    beforeEach(() => {
        jest.spyOn(axios, "get").mockResolvedValue({
            data: 0,
        });
    });

    test("should render Home Page '/'", async () => {
        render(<App />)

        textExpecter("Submit");
        // await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    })

    test("should render CountryInfo page with country Name", async () => {
        renderWithMemoryRouter("/countryInfo/bangladesh", <App />)
    
        await elementFinder("countryInfoTitle");
        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });

    // test("should render NotFound page on invalid route", async () => {
    
    //     await textFinderRx("page Not Found");
    // });

})