import { render, screen, cleanup } from '@testing-library/react'
import BigCarousel from '../Components/BigCarousel';
import ContentItem from '../Components/ContentItem';
import SmallCarousel from '../Components/SmallCarousel';

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


test("Should render empty smallCarousel", () => {
    const array = [{

    }]
    render(<SmallCarousel Data={array} Genre="Action" ></SmallCarousel>)

    const CarouselElement = screen.getByTestId("small-carousel-1");

    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
})

test("Should render 1 smallCarousel", () => {
    const array = [
        {
            "id": 13,
            "title": "The Hating Game",
            "description": "Resolving to achieve professional success without compromising her ethics, Lucy embarks on a ruthless game of one-upmanship against cold and efficient nemesis Joshua, a rivalry that is complicated by her growing attraction to him.\r\n",
            "rating": 0,
            "imgUrl": "https://images3.alphacoders.com/119/thumb-1920-1191846.jpg",
            "date": "2022-01-27T00:00:00",
            "status": 1,
            "length": 120,
            "filePath": "https://www.youtube.com/embed/0D2sJiseGQA",
            "movie": 1
        }
    ]
    render(<SmallCarousel Data={array} Genre="Action" ></SmallCarousel>)

    const CarouselElement = screen.getByTestId("small-carousel-1");

    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
    expect(CarouselElement).toHaveTextContent("The Hating Game");

})


test("Should render 2 smallCarousel", () => {
    const array = [
        {
            "id": 13,
            "title": "The Hating Game",
            "description": "Resolving to achieve professional success without compromising her ethics, Lucy embarks on a ruthless game of one-upmanship against cold and efficient nemesis Joshua, a rivalry that is complicated by her growing attraction to him.\r\n",
            "rating": 0,
            "imgUrl": "https://images3.alphacoders.com/119/thumb-1920-1191846.jpg",
            "date": "2022-01-27T00:00:00",
            "status": 1,
            "length": 120,
            "filePath": "https://www.youtube.com/embed/0D2sJiseGQA",
            "movie": 1
        },
        {
            "id": 13,
            "title": "The New Game",
            "description": "Resolving to achieve professional success without compromising her ethics, Lucy embarks on a ruthless game of one-upmanship against cold and efficient nemesis Joshua, a rivalry that is complicated by her growing attraction to him.\r\n",
            "rating": 0,
            "imgUrl": "https://images3.alphacoders.com/119/thumb-1920-1191846.jpg",
            "date": "2022-01-27T00:00:00",
            "status": 1,
            "length": 120,
            "filePath": "https://www.youtube.com/embed/0D2sJiseGQA",
            "movie": 1
        }
    ]
    render(<SmallCarousel Data={array} Genre="Action" ></SmallCarousel>)

    const CarouselElement = screen.getByTestId("small-carousel-1");

    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
    expect(CarouselElement).toHaveTextContent("The Hating Game");
    expect(CarouselElement).toHaveTextContent("The New Game");

})


