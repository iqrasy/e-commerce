import styled from "styled-components";
import { BsBag } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import React, { useState } from "react";
import { Button, Container, Navbar, Modal, Nav } from "react-bootstrap";

const Header = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{/* <Head> */}
			<Navbar>
				<Navbar.Brand href="/">BELLE</Navbar.Brand>
				<Navbar.Toggle />
				{/* <div> */}
				{/* <VscAccount /> */}
				{/* <BsSuitHeart /> */}
				<Navbar.Collapse>
					<Button onClick={handleShow}>
						<BsBag />
					</Button>
				</Navbar.Collapse>
				{/* </div> */}
			</Navbar>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Shopping Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h1>This is the modal body</h1>
				</Modal.Body>
			</Modal>
			{/* </Head> */}
		</>
	);
};

const Head = styled.nav`
	width: 100%;
	height: 6rem;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		color: #cc071e;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Permanent Marker", cursive;
		font-size: 2.5em;
	}

	div {
		position: absolute;
		right: 0;
		top: 0;
		padding: 1em;
		font-size: 1.5em;
	}
`;

export default Header;
