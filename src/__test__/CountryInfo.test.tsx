import CountryInfo from "../Components/CountryInfo/CountryInfo";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { elementFinder, renderWithMemoryRouter } from "../Utilities/testUtilities";
import { BrowserRouter, MemoryRouter, Switch } from "react-router-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

describe("country info page", () => {
    jest.spyOn(axios, "get").mockResolvedValue({
        data: {
              flags:{
                  svg: "https://flagcdn.com/bd.svg",
              },
              capital: "Dhaka",
              population: 164689383,
              latlng: [24, 90],
        },
    });

    test("should initially render header of component", async () => {
      renderWithMemoryRouter("/countryInfo/bangladesh", <CountryInfo />);
  
      await elementFinder("countryInfoTitle");
    });

    test("should render actual country info data arrival", async () => {
      await act(async () => {
        renderWithMemoryRouter("/countryInfo/bangladesh", <App />
        );
      });
      waitFor(() => {
        expect(screen.getByTestId("capitalName")).toBeInTheDocument();
      })
    });

    test("should render when actual country info data not arrival", async () => {
      await act(async () => {
        renderWithMemoryRouter("/countryInfo/bangladesh", <App />
        );
      });
      waitFor(() => {
        expect(screen.getByTestId("dataNotFound")).toBeInTheDocument();
      })
    });

    test("should show weather button", async () => {
      await act(async () => {
        renderWithMemoryRouter("/countryInfo/bangladesh", <App />
        );
      });
      
      waitFor(() => {
        expect(screen.getByTestId("weatherButton")).toBeInTheDocument();
      })
    });

    jest.spyOn(axios, "get").mockResolvedValue({
        data: [{
            weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png'],
            temperature: 28,
            wind_speed: 16,
            precip: 0,
        }],
    });

    test("should show weather information of capital", async () => {
      await act(async () => {
        renderWithMemoryRouter("/countryInfo/bangladesh", <App />
        );
      });

      waitFor(() => {
        expect(screen.getByTestId("weatherInformationTest")).toBeInTheDocument();
      })
    });
})