import { render, renderHook, screen, waitFor } from '@testing-library/react';
// import userEvents from '@testing-library/user-event'
import userEvent from '@testing-library/user-event'
import App from '../App';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Comments get display after submitting',async()=>{
    render(<App/>)
    const checkbox = screen.getByLabelText('I agree to terms and conditions',{exact:false})
    const submitButton= screen.getByRole("button",{name:'comment', exact:false})
    const commitInput= screen.getByPlaceholderText('write your comment here',{exact:false})

    await userEvent.type(commitInput,'nice picture')
    await userEvent.click(checkbox)
    await userEvent.click(submitButton)

    // const commentLi = screen.getByText('nice picture',{exact:false})
    // const commentLi =await screen.findByText('nice picture',{exact:false})
    // expect(commentLi).toBeInTheDocument()

    setTimeout(()=>{
        const commentLi =screen.getByText('nice picture',{exact:false})
        expect(commentLi).toBeInTheDocument()
    },3000)
})

test('2 Comments get display after submitting',async()=>{
    render(<App/>)
    const checkbox = screen.getByLabelText('I agree to terms and conditions',{exact:false})
    const submitButton= screen.getByRole("button",{name:'comment', exact:false})
    const commitInput= screen.getByPlaceholderText('write your comment here',{exact:false})
    
    await userEvent.type(commitInput,'nice picture')
    await userEvent.click(checkbox)
    await userEvent.click(submitButton)
    
    await userEvent.type(commitInput,'awesome')
    await userEvent.click(submitButton)

    
    // await waitFor(()=>{
    // })
    
    setTimeout(()=>{
        const commentLi = screen.getAllByRole('listitem')
        expect(commentLi.length).toBe(2)  
    },2000)
    
})