import { test } from "vitest"
import { expect } from "vitest"
import { Card } from '../Card'
import { render, screen } from '@testing-library/react'
import React from "react"
import '@testing-library/jest-dom'


test("card", () => {
    render(<Card />)
    screen.debug()
    const result = screen.getByText('Card')
    expect(result.textContent).toBeTruthy()
})