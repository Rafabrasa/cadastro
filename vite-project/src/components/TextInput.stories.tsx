import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps,TextInputRootProps } from './TextInput'


 
export default{
title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
        Children:(
            <>
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>        
            <TextInput.Input placeholder= "Type your e-mail address"/> 
            </>
            ),
        },
    argTypes:{
        children:{
            table:{
                diseble:true
            }
        },
    }


} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: <TextInput.Input placeholder="Type your e-mail address"/>
    }
}
