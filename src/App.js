import Navbar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/sign-in/authentication.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.components";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
