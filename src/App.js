import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Top from "./Top";
import RadissonRewards from "./RadissonRewards";
import Home from "./Home";
import Booking from "./Booking";
import Login from "./Login";
import Footer from "./Footer";
import Deals from "./Deals";
import Destinations from "./Destinations";
import Resorts from "./Resorts";
import MeetingsEvents from "./MeetingsEvents";
import AdminModule from "./Admin/AdminModule";
import Reviews from "./Reviews";

// 🔒 Private route wrapper
function PrivateRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;

  // check role if provided
  if (role && role !== userRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <>
      {!isAdminPage && <Top />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/lang" element={<RadissonRewards />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/meetings-events" element={<MeetingsEvents />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />

        {/* Customer private route */}
        <Route
          path="/booking"
          element={
            <PrivateRoute role="customer">
              <Booking />
            </PrivateRoute>
          }
        />

        {/* Admin private route */}
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminModule />
            </PrivateRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
