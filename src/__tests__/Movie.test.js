import ContentItem from "../Components/ContentItem";
import { render, screen, cleanup } from '@testing-library/react'
import CustomModal from "../Components/CustomModal";
import React, { useState } from 'react';

afterEach(() => {
    cleanup();
})


test("Should render CustomModal", () => {

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
    }];
    render(<CustomModal
        show={true}
        onHide={() => show = false}
        data={array}
    ></CustomModal>)

    const CarouselElement = screen.getByTestId("modal-1");
    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
})

test("Should render empty CustomModal", () => {

    const array = [{
      
    }];
    render(<CustomModal
        show={true}
        onHide={() => show = false}
        data={array}
    ></CustomModal>)

    const CarouselElement = screen.getByTestId("modal-1");
    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
})

test("Should render ContentItem", () => {

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
    }];
    render(<ContentItem Contents={array}></ContentItem>)

    const CarouselElement = screen.getByTestId("content-item-1");
    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
})

test("Should render empty ContentItem", () => {

    const array = [{
    }];
    render(<ContentItem Contents={array}></ContentItem>)

    const CarouselElement = screen.getByTestId("content-item-1");
    expect(CarouselElement).toBeInTheDocument();
    expect(CarouselElement).toBeVisible();
})