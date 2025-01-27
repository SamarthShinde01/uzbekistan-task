"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	mobile: z.string().min(10, {
		message: "Mobile number must be at least 10 digits.",
	}),
	city: z.string().min(2, {
		message: "Please enter a valid city name.",
	}),
	countryCode: z.string().default("+91"),
});

export default function ContactForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			countryCode: "+91",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className="w-full p-6">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Your Name"
										{...field}
										className="bg-white rounded-md h-12 w-full"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Your Email"
										type="email"
										{...field}
										className="bg-white rounded-md h-12 w-full"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex gap-2 flex-col sm:flex-row sm:gap-4">
						<FormField
							control={form.control}
							name="countryCode"
							render={({ field }) => (
								<FormItem className="w-[100px] sm:w-[120px]">
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="bg-white rounded-md h-12">
												<SelectValue placeholder="Code" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="+91">+91</SelectItem>
											<SelectItem value="+1">+1</SelectItem>
											<SelectItem value="+44">+44</SelectItem>
											<SelectItem value="+81">+81</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="mobile"
							render={({ field }) => (
								<FormItem className="w-full sm:flex-1">
									<FormControl>
										<Input
											placeholder="Your Mobile No."
											type="tel"
											{...field}
											className="bg-white rounded-md h-12"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="city"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Current City"
										{...field}
										className="bg-white rounded-md h-12"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="w-full sm:w-32 h-12 bg-[#4db6ac] hover:bg-[#45a399] text-white rounded-md"
					>
						Apply Now
					</Button>
				</form>
			</Form>
		</div>
	);
}
