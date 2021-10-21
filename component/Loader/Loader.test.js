/**
 * @jest-environment jsdom
 */
import { render} from "@testing-library/react";
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import Loader from "./Loader.jsx";
describe("Loader.jsx", () => {
   
    test("Loader Component ", async () => {
        global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => {
                return {

                    "main.js": "http://localhost:5003/main.js",
                    "main.js.map": "http://localhost:5003/main.js.map"

                }
            }
        }))
        let component
        await act(async ()=>{
            component = render(<Loader url='http://localhost:5003/manifest.json' identifier = "footerloader" loading={<h3>loading ...</h3>} appdata= {{"count":1} } namespace='footerApp' />)
            
        })
        expect(component.queryByTestId("loader-testid")).toBeTruthy()


    });

    
});