/* eslint-disable react/no-unstable-nested-components */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminLayout from "./layouts/AdminLayout";

import CpLayout from "./layouts/CpLayout";
import CpProductList from "./pages/CpProductList";
import CpProductCreate from "./pages/CpProductCreate";
import CpProductDetail from "./pages/CpProductDetail";

import OhLayout from "./layouts/OhLayout";
import OhProductList from "./pages/OhProductList";
import OhProductCreate from "./pages/OhProductCreate";
import OhProductDetail from "./pages/OhProductDetail";

import logo from "./logo.svg";

import "./App.css";
import ReviewData from "./pages/ReviewData";
import ReviewDetail from "./pages/ReviewDetail";

function App() {
	return (
		<Router>
			<Navbar />
			<div style={{ maxWidth: 1280, margin: "auto", padding: 10 }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/CpProduct" element={<CpLayout />}>
						<Route path="/CpProduct" element={<CpProductList />} />
						<Route path="/CpProduct/create" element={<CpProductCreate />} />
						<Route path="/CpProduct/:ProductId" element={<CpProductDetail />} />
					</Route>
					<Route path="/OhProduct" element={<OhLayout />}>
						<Route path="/OhProduct" element={<OhProductList />} />
						<Route path="/OhProduct/create" element={<OhProductCreate />} />
						<Route path="/OhProduct/:ProductId" element={<OhProductDetail />} />
					</Route>
					<Route path="/Review/:ProductId" element={<ReviewData />} />
					<Route path="/admin" element={<AdminLayout />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
