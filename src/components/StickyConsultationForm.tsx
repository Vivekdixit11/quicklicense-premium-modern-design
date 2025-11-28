"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, User, FileText, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormData } from "@/lib/api";

export default function StickyConsultationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            // Prepare data for API
            const contactData: ContactFormData = {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message || "LMPC Certificate inquiry",
            };

            // Submit to backend API
            const response = await submitContactForm(contactData);

            console.log("Form submitted successfully:", response);

            // Show success message
            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            }, 3000);

        } catch (error) {
            console.error("Form submission error:", error);
            setError(error instanceof Error ? error.message : "Failed to submit form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear error when user starts typing
        if (error) setError(null);
    };

    return (
        <div className="z-10">
            <Card className="border-2 border-blue-500 shadow-2xl bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-[#23A8DD] flex items-center justify-center mb-3">
                        <FileText className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading">
                        Get Free Consultation
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Fill the form and our expert will call you back
                    </p>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap gap-2 pt-3">
                        <div className="flex items-center gap-1 text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>100% Legal</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Pan-India</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Fast Processing</span>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="pt-0">
                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
                            <p className="text-sm text-muted-foreground">
                                We'll contact you shortly
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Error Alert */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <p className="text-sm text-red-800 font-medium">Submission Failed</p>
                                        <p className="text-xs text-red-700 mt-1">{error}</p>
                                    </div>
                                </div>
                            )}

                            <div>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <Input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name *"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        minLength={2}
                                        maxLength={100}
                                        disabled={isLoading}
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <Input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        minLength={10}
                                        maxLength={20}
                                        pattern="[0-9\s\-\+\(\)]+"
                                        disabled={isLoading}
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Tell us about your requirement (optional)"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    maxLength={1000}
                                    disabled={isLoading}
                                    className="resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-[#23A8DD] hover:shadow-lg smooth-transition"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Get Free Quote"
                                )}
                            </Button>

                            {/* Call CTA */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-2 bg-white text-gray-500">OR</span>
                                </div>
                            </div>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full border-2 border-blue-500 text-blue-700 hover:bg-blue-50"
                                size="lg"
                                asChild
                            >
                                <a href="tel:+919891614601" className="flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Call Now: +91 98916 14601
                                </a>
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
