import '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, test } from '@jest/globals'
import Form from './Form'
import * as HandleRegister from '../register'

test('renderiza o formulário com o rótulo correto', () => {
    render(<Form/>)
    const formElement = screen.getByText(/Entrar/i)
    expect(formElement).toBeTruthy()

    //logRoles(view.container)
})

test('confere se os campos estão vazios', () => {
    render(<Form />)
    const formElement = screen.getByRole("input1")
    const formElement2 = screen.getByRole("input2")
    expect(formElement).toBeTruthy()
    expect(formElement2).toBeTruthy()
})

jest.mock('../register')

test('confere se o formulário está sendo enviado', async () => {
    const mock = jest.spyOn(HandleRegister, 'handleRegister').mockImplementation()
    const { getByText } = render(<Form />)
    const formButton = getByText(/Entrar/i)
    fireEvent.submit(formButton)
    expect(mock).toHaveBeenCalledTimes(1)
})