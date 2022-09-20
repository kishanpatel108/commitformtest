import { fireEvent, logRoles, render ,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Commentform from "../component/CommentForm";

test('Initial Condition',()=>{
    render(<Commentform/>)
    // logRoles(screen.getByTestId("maindiv"))//log padva mate

    //----------------------- inputbox test cases // pleceholder thi pakday-------------------------------------//
    const commitinput= screen.getByRole("textbox")
    expect(commitinput).toBeInTheDocument()

    //---------- lable checkbox --------------------//
    const checkbox = screen.getByLabelText('I agree to terms and conditions',{exact:false})
    expect(checkbox).toBeInTheDocument()

    //--------------- button -------------------------//
    const submitbutton= screen.getByRole("button",{name:'comment', exact:false})
    expect(submitbutton).toBeDisabled()

})

test('Enable submit button on type and checkbox click',async()=>{
    render(<Commentform/>)
    const checkbox = screen.getByLabelText('I agree to terms and conditions',{exact:false})
    const submitButton= screen.getByRole("button",{name:'comment', exact:false})
    const commitInput= screen.getByPlaceholderText('write your comment here',{exact:false})

    //--------------------- fireEvent(hume kya effect karvana hee ushe ke liye )----------------------------------//

    // fireEvent.change(commitInput,{target:{value:"something"}})
    // fireEvent.click(checkbox)

    //------------- fireEvent ke jagha hum userEvent use kar sakte hee------------------ //

    await userEvent.type(commitInput,"something")
    await userEvent.click(checkbox)

    expect(submitButton).toBeEnabled()

    await userEvent.click(checkbox)
    expect(submitButton).toBeDisabled()
})