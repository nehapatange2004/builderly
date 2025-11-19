'use client'
import { AppWindowIcon, Check, CodeIcon, Eye, EyeClosed, EyeClosedIcon, EyeIcon, EyeOffIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@radix-ui/react-checkbox"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"
import React from "react"
import Link from "next/link"
import { Spinner } from "@/components/ui/spinner"

export default function TabsDemo() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [tab, setTab] = React.useState<"signin" | "signup">("signin");
    const [isLoading, setIsLoading] = React.useState(false);
    return (
        <div className="flex w-full max-w-sm flex-col gap-6 z-10 mt-10">
            <Tabs defaultValue={tab} onValueChange={(value) => setTab(value as "signin" | "signup")} >
                <TabsList className="w-full flex justify-center">
                    <TabsTrigger value="signup" disabled={isLoading}>
                        Sign up
                    </TabsTrigger>
                    <TabsTrigger value="signin" disabled={isLoading}>
                        Sign in
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card className="bg-secondary/50">
                        <CardContent className="grid gap-6">
                            <form>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="name">
                                            Name
                                        </FieldLabel>
                                        <Input
                                            id="name"
                                            placeholder="Alex Doe"
                                            required
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            id="email"
                                            placeholder="alex@gmail.com"
                                            required
                                        />
                                    </Field>

                                    <Field className="relative">
                                        <FieldLabel htmlFor="password">
                                            Password
                                        </FieldLabel>
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="********"
                                            required
                                            className="z-5 pr-10"

                                        />
                                        <div className=" absolute bottom-0.5 right-0 w-full flex justify-end px-2 py-1">
                                            {showPassword &&
                                                <button type="button" className="cursor-pointer z-5 active:bg-accent-foreground/20 rounded-full" onClick={() => setShowPassword(prev => !prev)}><EyeIcon /></button>}
                                            {!showPassword &&
                                                <button type="button" className="cursor-pointer z-5 active:bg-accent-foreground/20 rounded-full" onClick={() => setShowPassword(prev => !prev)}><EyeOffIcon /></button>}
                                        </div>
                                    </Field>
                                    <Field className="relative">
                                        <FieldLabel htmlFor="password">
                                            Confirm Password
                                        </FieldLabel>
                                        <Input
                                            id="confirm-password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="********"
                                            required
                                            className="z-5 pr-10"

                                        />
                                        <div className=" absolute bottom-0.5 right-0 w-full flex justify-end px-2 py-1">
                                            {showPassword &&
                                                <button type="button" className="cursor-pointer z-5 active:bg-accent-foreground/20 rounded-full" onClick={() => setShowPassword(prev => !prev)}><EyeIcon /></button>}
                                            {!showPassword &&
                                                <button type="button" className="cursor-pointer z-5 active:bg-accent-foreground/20 rounded-full" onClick={() => setShowPassword(prev => !prev)}><EyeOffIcon /></button>}
                                        </div>
                                    </Field>
                                    {/* <FieldSeparator /> */}

                                    <Button type="button" disabled={isLoading} className="active:bg-accent-foreground/70 cursor-pointer">{isLoading ? <Spinner /> : ""} Sign Up</Button>

                                </FieldGroup>

                            </form>
                        </CardContent>

                    </Card>
                </TabsContent>
                <TabsContent value="signin">
                    <Card className="bg-secondary/50">
                        <CardContent className="grid gap-6">
                            <form>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            id="email"
                                            placeholder="alex@gmail.com"
                                            required
                                        />
                                    </Field>

                                    <Field className="relative">
                                        <FieldLabel htmlFor="password">
                                            Password
                                        </FieldLabel>
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="********"
                                            required
                                            className="z-5 pr-10"

                                        />
                                        <div className=" absolute bottom-0.5 right-0 w-full flex justify-end px-2 py-1">
                                            {showPassword &&
                                                <button type="button" className="cursor-pointer z-5 active:bg-accent-foreground/20 rounded-full" onClick={() => setShowPassword(prev => !prev)}><EyeIcon /></button>}
                                            {!showPassword &&
                                                <button type="button" className="cursor-pointer z-5 active:bg-accent-foreground/20 rounded-full" onClick={() => setShowPassword(prev => !prev)}><EyeOffIcon /></button>}
                                        </div>
                                    </Field>
                                    {/* <FieldSeparator /> */}

                                    <Button type="button" disabled={isLoading} className="active:bg-accent-foreground/70 cursor-pointer">{isLoading ? <Spinner /> : ""} Sign In</Button>

                                </FieldGroup>

                            </form>
                        </CardContent>

                    </Card>
                </TabsContent>

            </Tabs>
        </div>
    )
}
