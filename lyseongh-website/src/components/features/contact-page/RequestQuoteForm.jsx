'use client';

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import Modal from "./ConfirmationModal";

export function RequestQuoteForm(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formSchema = z.object({
        firstname: z.string().min(2, {message: 'First name must be at least 2 characters.'}).max(50),
        lastname: z.string().min(2, {message: 'Last name must be at least 2 characters.'}).max(50),
        email: z.email({ message: 'Please enter a valid email.' }),
        phone: z.string().min(10, {message: 'Phone number must be at least 10 digits.'}),
        message: z.string()
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            message: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField 
                    control={form.control}
                    name='firstname'
                    render={({ field }) => (
                        <FormItem className="">
                            <FormControl>
                                <Input placeholder="First Name" {...field} className="py-4 px-6"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='lastname'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Last Name" {...field} className="py-4 px-6"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email" {...field} className="py-4 px-6"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Phone Number" {...field} className="py-4 px-6"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Message" {...field} className="min-h-[150px] p-4"/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button 
                type="submit" 
                className="w-full py-6 text-lg cursor-pointer font-semibold bg-black hover:bg-gray-950 transition-colors"
                onClick={() => setIsModalOpen(true)}
                >
                    Request Quote
                </Button>
            </form>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </Form>
    )
}