import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "../pages/Home"
import Card from "../pages/Card"
import Form from "../pages/Form"
import Map from "../pages/Map"
import NotFound from "../pages/NotFound"

const NaveRouter = () => {
    return (
        <div>
                  <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="/form" element={<Form />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
        </div>
    );
};

export default NaveRouter;