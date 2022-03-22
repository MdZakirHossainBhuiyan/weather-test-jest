import CountryInfo from "../Components/CountryInfo/CountryInfo";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { elementFinder, renderWithMemoryRouter } from "../Utilities/testUtilities";
import { BrowserRouter, MemoryRouter, Switch } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("country info page", () => {
    jest.spyOn(axios, "get").mockResolvedValue({
        data: {
          hits: [
            {
              flags:{
                  svg: "https://flagcdn.com/bd.svg",
              },
              capital: ["Dhaka"],
              population: 164689383,
              latlng: [24, 90],
            },
          ],
        },
    });

    test("should initially render header of component", async () => {
      renderWithMemoryRouter("/countryInfo/bangladesh", <CountryInfo />);
  
      await elementFinder("countryInfoTitle");
    });

    // test("should render actual country info upon data arrival", async () => {
    //   await act(async () => {
    //     renderWithMemoryRouter("/countryInfo/bangladesh", <CountryInfo />
    //         // <MemoryRouter>
    //         //     <Switch>
    //         //         <CountryInfo />
    //         //     </Switch>
    //         // </MemoryRouter>
    //     );
    //   });
    //   await elementFinder("capitalName");
    // });

    // test("should initially render header of component", async () => {
    //   renderWithMemoryRouter("/countryInfo/bangladesh", <CountryInfo />);
  
    //   await elementFinder("weatherButton");
    // });

    jest.spyOn(axios, "get").mockResolvedValue({
      data: {
        hits: [
          {
            weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png'],
            temperature: 28,
            wind_speed: 16,
            precip: 0,
          },
        ],
      },
    });

    
})