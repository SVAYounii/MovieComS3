import { render, screen, cleanup } from '@testing-library/react'
import BigCarousel from '../Components/BigCarousel';
import ContentItem from '../Components/ContentItem';

afterEach(() => {
    cleanup();
})


test("Should render BigCarousel", () => {
    const array = [{
        date: "2022-06-09T00:00:00",
        description: "The future of mankind hangs in the balance as humans and dinosaurs coexist following the destruction of Isla Nublar.",
        favourites: [],
        filePath: "https://www.youtube.com/watch?v=DtQycgMD4HQ",
        id: 44,
        imgUrl: "https://images3.alphacoders.com/123/1239920.jpg",
        length: 147,
        movie: 1,
        rating: 0,
        seasons: [],
        status: 1,
        title: "Jurassic World Dominion"
    }]
    render(<BigCarousel Contents={array}></BigCarousel>)

    const CarouselElement = screen.getByTestId("carousel-1");
    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
    expect(CarouselElement).toHaveTextContent("Jurassic World Dominion");
})

test("Should NOT throw error because array is empty", () => {
    const array = [{
        
    }]
    render(<BigCarousel Contents={array}></BigCarousel>)
    
    const CarouselElement = screen.getByTestId("carousel-1");
    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
})


test("Should render smallCarousel", () => {
    const array = [{
        
    }]
    render(<ContentItem Contents={array}></ContentItem>)

    const CarouselElement = screen.getByTestId("small-carousel-1");

    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
})
