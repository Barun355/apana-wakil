import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LawyerLayout from "./pages/lawyer/layout.tsx";
import LandingPage from "./pages/LandingPage.tsx";

import ClientLayout from "./pages/client/layout.tsx";
import ClientServices from "./pages/client/Services.tsx";
import ClientNotification from "./pages/client/Notification.tsx";
import ClientActiveCase from "./pages/client/ActiveCase.tsx";
import BookAppointmentPage from "./pages/client/BookAppointmentPage.tsx";
import { SignIn } from "./pages/SignIn.tsx";
import { SignUp } from "./pages/SignUp.tsx";
import { ClientDashboard } from "./pages/client/Dashboard.tsx";
import { CaseDetails } from "./pages/client/ClientCaseDetails.tsx";
import { RequireAuth } from "./hooks/protectedRoute.tsx";
import { Role } from "./lib/types.ts";
import { AboutUsPage } from "./pages/AboutUs.tsx";
import { ContactUsPage } from "./pages/ContactUs.tsx";
import { FAQPage } from "./pages/FAQs.tsx";
import { TermsPage } from "./pages/TermsPage.tsx";
import ClientProfile from "./pages/client/ClientProfile.tsx";
import { LawyerSearch } from "./pages/client/LawyerSearch.tsx";
import ClientLawyerProfile from "./pages/client/LawyerProfile.tsx";
import { ClientPaymentPage } from "./pages/client/ClientPayments.tsx";
import HelpSupport from "./pages/client/Support.tsx";
import { ClientAppointments } from "./pages/client/ClientAppointments.tsx";
import Dashboard from "./pages/lawyer/Dashboard.tsx";
import { LawyerCaseManagement } from "./pages/lawyer/LawyerCaseManagement.tsx";
import ServiceRequestsPage from "./pages/lawyer/ServiceRequestsPage.tsx";
import { LawyerAppointments } from "./pages/lawyer/LawyerAppointments.tsx";
import LawyerProfile from "./pages/lawyer/LawyerProfile.tsx";
import Notifications from "./pages/lawyer/Notification copy.tsx";
import { ToastContainer } from "react-toastify";
import LawyerCreateCase from "./pages/lawyer/CreateCase.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signin",
    element: (
      <>
        <SignIn />
        <ToastContainer />
      </>
    ),
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/faqs",
    element: <FAQPage />,
  },
  {
    path: "/signup",
    element: (
      <>
        <SignUp />
        <ToastContainer />
      </>
    ),
  },
  {
    path: "/lawyer/dashboard",
    element: (
      <RequireAuth role={Role.LAWYER}>
        <LawyerLayout />
        <ToastContainer />
      </RequireAuth>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "cases",
        element: <LawyerCaseManagement />,
      },
      {
        path: "create-case",
        element: <LawyerCreateCase />,
      },
      {
        path: "requests",
        element: <ServiceRequestsPage />,
      },
      {
        path: "appointments",
        element: <LawyerAppointments />,
      },
      {
        path: "profile",
        element: <LawyerProfile />,
      },
      {
        path: "notification",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "/client/dashboard",
    element: (
      <RequireAuth role={Role.CLIENT}>
        <ClientLayout />
        <ToastContainer />
      </RequireAuth>
    ),
    children: [
      {
        path: "",
        element: <ClientDashboard />,
      },
      {
        path: "appointments",
        element: <ClientAppointments />,
      },
      {
        path: "book-appointment",
        element: <BookAppointmentPage />,
      },
      {
        path: "cases",
        element: <CaseDetails />,
      },
      {
        path: "search",
        element: <LawyerSearch />
      },
      {
        path: "lawyer-profile",
        element: <ClientLawyerProfile />,
      },
      {
        path: "cases-management",
        element: <CaseDetails />,
      },
      {
        path: "support",
        element: <HelpSupport />,
      },
      {
        path: "active-cases",
        element: <ClientActiveCase />,
      },
      {
        path: "services",
        element: <ClientServices />,
      },
      {
        path: "payments",
        element: <ClientPaymentPage />,
      },
      {
        path: "notifications",
        element: <ClientNotification />,
      },
      {
        path: "profile",
        element: <ClientProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
