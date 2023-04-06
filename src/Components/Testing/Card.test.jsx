import { expect, test } from "vitest"
import Card from "../Card"
import { render, screen } from "@testing-library/react"

test("card", () => {
    render(<Card />)
    screen.debug()
    const result = screen.getByText('Card')
    expect(result.textContent).toBeTruthy()
})