import React from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const ContactForm: React.FC = () => {
    const { t } = useTranslation()

    const formSchema = z.object({
        name: z.string().min(2, {
            message: t('nameRequired'),
        }),
        email: z.string().email({
            message: t('emailInvalid'),
        }),
        message: z.string().min(10, {
            message: t('messageRequired'),
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // This app doesn't send anything if you would to send something you need add some backend or use EmailJS
        console.log(values)
        alert(t('formSubmissionSuccess'))
    }

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">{t('contactUs')}</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-2">
                    <Label htmlFor="name">{t('name')}</Label>
                    <Input
                        id="name"
                        placeholder={t('enterYourName')}
                        {...form.register('name')}
                        className={cn(
                            "w-full",
                            form.formState.errors.name && "border-red-500"
                        )}
                    />
                    {form.formState.errors.name && (
                        <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">{t('email')}</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder={t('enterYourEmail')}
                        {...form.register('email')}
                        className={cn(
                            "w-full",
                            form.formState.errors.email && "border-red-500"
                        )}
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">{t('message')}</Label>
                    <Textarea
                        id="message"
                        placeholder={t('enterYourMessage')}
                        {...form.register('message')}
                        className={cn(
                            "w-full min-h-[100px]",
                            form.formState.errors.message && "border-red-500"
                        )}
                    />
                    {form.formState.errors.message && (
                        <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                    )}
                </div>
                <Button type="submit" className="w-full">{t('submit')}</Button>
            </form>
        </div>
    )
}

export default ContactForm