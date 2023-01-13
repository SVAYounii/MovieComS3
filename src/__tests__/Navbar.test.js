import { render, screen, cleanup } from '@testing-library/react'
import Navbar  from '../Components/Navbar';
import CustomModal from "../Components/CustomModal";

afterEach(() => {
    cleanup();
})


test("Should render CustomModal", () => {

   
    render(<Navbar/>)

    const CarouselElement = screen.getByTestId("navbar-1");
    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
    expect(CarouselElement).toHaveTextContent("MovieCom");
})