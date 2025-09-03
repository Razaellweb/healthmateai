"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-background/80 backdrop-blur border-b border-border custom-header-shadow transition-shadow">
        <nav className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">HM</span>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">HealthMate <span className="text-blue-500">AI</span></span>
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <Link href="/signin">
              <Button variant="ghost" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-lg shadow-lg transition-all">Get Started Free</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-28 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-background dark:via-blue-950/30 dark:to-blue-900/40">
        <div className="container flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mb-6">
              Your <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">AI-Powered Partner</span> for Better Health
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-xl mx-auto md:mx-0">
              HealthMate AI empowers you to take charge of your health journey with intelligent insights, proactive alerts, and personalized recommendations—anytime, anywhere.
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg rounded-xl shadow-xl transition-all animate-bounce-slow">
                Get Started Free
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center md:justify-end fade-in">
            {/* Hero Visual: Data-rich, friendly health dashboard mockup */}
            <div className="relative w-[320px] sm:w-[380px] md:w-[420px] h-[420px] bg-white dark:bg-blue-950/80 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900 flex flex-col items-center justify-center p-6 animate-fade-in">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2">
                <span className="block w-3 h-3 rounded-full bg-blue-400/70" />
                <span className="block w-3 h-3 rounded-full bg-blue-200/70" />
                <span className="block w-3 h-3 rounded-full bg-blue-100/70" />
              </div>
              <div className="w-full flex flex-col gap-4 mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-500 dark:text-gray-300">Heart Rate</span>
                  <span className="font-bold text-blue-500 text-lg">72 bpm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-500 dark:text-gray-300">Sleep</span>
                  <span className="font-bold text-blue-400 text-lg">7.5 hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-500 dark:text-gray-300">Steps</span>
                  <span className="font-bold text-blue-600 text-lg">10,200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-500 dark:text-gray-300">Hydration</span>
                  <span className="font-bold text-blue-300 text-lg">2.1 L</span>
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-gray-500 dark:text-gray-300">Today’s Insight</span>
                  <span className="text-sm text-gray-700 dark:text-gray-200">You’re on track! Keep up your healthy habits for optimal results.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Section */}
      <section className="container py-10 md:py-16" aria-label="Trusted by">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-gray-500 dark:text-gray-400 text-lg mb-2 md:mb-0">Trusted by professionals at:</span>
          <div className="flex gap-8 md:gap-12 items-center flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2021_Stanford.svg" alt="Stanford" className="h-7 grayscale opacity-80 hover:opacity-100 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Johns_Hopkins_University_seal.svg" alt="Johns Hopkins" className="h-7 grayscale opacity-80 hover:opacity-100 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Harvard_University_logo.svg" alt="Harvard" className="h-7 grayscale opacity-80 hover:opacity-100 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Mayo_Clinic_logo.svg" alt="Mayo Clinic" className="h-7 grayscale opacity-80 hover:opacity-100 transition" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose HealthMate AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <Card className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-blue-950/70 fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mr-3">1</span>
              <span className="font-semibold text-lg">Personalized Guidance</span>
            </div>
            <p className="text-gray-700 dark:text-gray-200">Tailored health insights and recommendations based on your unique data and lifestyle.</p>
          </Card>
          {/* Feature 2 */}
          <Card className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-blue-950/70 fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mr-3">2</span>
              <span className="font-semibold text-lg">Proactive Alerts</span>
            </div>
            <p className="text-gray-700 dark:text-gray-200">Early warnings and risk assessments for peace of mind and timely action.</p>
          </Card>
          {/* Feature 3 */}
          <Card className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-blue-950/70 fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mr-3">3</span>
              <span className="font-semibold text-lg">Actionable Recommendations</span>
            </div>
            <p className="text-gray-700 dark:text-gray-200">Lifestyle tips you can trust, grounded in science and tailored to your needs.</p>
          </Card>
          {/* Feature 4 */}
          <Card className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-blue-950/70 fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mr-3">4</span>
              <span className="font-semibold text-lg">Seamless Integration</span>
            </div>
            <p className="text-gray-700 dark:text-gray-200">Connects with your favorite health and fitness apps for a unified experience.</p>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Simple, Transparent Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Free Plan */}
          <Card className="w-full md:w-1/3 p-8 rounded-2xl shadow-lg border-2 border-blue-400 bg-white dark:bg-blue-950/70 fade-in">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Free</h3>
            <div className="text-4xl font-extrabold mb-4">$0</div>
            <ul className="mb-6 text-gray-700 dark:text-gray-200 space-y-2">
              <li>Personalized insights</li>
              <li>Basic health tracking</li>
              <li>App integrations</li>
            </ul>
            <Link href="/signup">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full">Get Started</Button>
            </Link>
          </Card>
          {/* Pro Plan */}
          <Card className="w-full md:w-1/3 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-900 bg-white dark:bg-blue-950/70 fade-in scale-105 md:scale-110 z-10">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Pro</h3>
            <div className="text-4xl font-extrabold mb-4">$9<span className="text-lg font-normal">/mo</span></div>
            <ul className="mb-6 text-gray-700 dark:text-gray-200 space-y-2">
              <li>Everything in Free</li>
              <li>Advanced analytics</li>
              <li>Proactive health alerts</li>
              <li>Priority support</li>
            </ul>
            <Link href="/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full">Start Pro Trial</Button>
            </Link>
          </Card>
          {/* Enterprise Plan */}
          <Card className="w-full md:w-1/3 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-900 bg-white dark:bg-blue-950/70 fade-in">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Enterprise</h3>
            <div className="text-4xl font-extrabold mb-4">Custom</div>
            <ul className="mb-6 text-gray-700 dark:text-gray-200 space-y-2">
              <li>All Pro features</li>
              <li>Custom integrations</li>
              <li>Dedicated onboarding</li>
              <li>Enterprise SLAs</li>
            </ul>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white w-full">Contact Sales</Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="p-8 rounded-2xl shadow-md bg-white dark:bg-blue-950/70 fade-in">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="Testimonial user 1" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Alexis L.</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">Fitness Enthusiast</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200">“HealthMate AI keeps me motivated and on track with my goals. The insights are spot-on and the interface is beautiful!”</p>
          </Card>
          {/* Testimonial 2 */}
          <Card className="p-8 rounded-2xl shadow-md bg-white dark:bg-blue-950/70 fade-in">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/men/44.jpg" alt="Testimonial user 2" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Jordan M.</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">Young Professional</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200">“The proactive alerts give me peace of mind. I love how HealthMate AI connects with all my apps.”</p>
          </Card>
          {/* Testimonial 3 */}
          <Card className="p-8 rounded-2xl shadow-md bg-white dark:bg-blue-950/70 fade-in">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/90.jpg" alt="Testimonial user 3" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Samira R.</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">Chronic Disease Risk</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200">“Finally, a health app that feels like it understands me. The recommendations are actionable and easy to follow.”</p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto space-y-4">
          <AccordionItem value="q1">
            <AccordionTrigger>How does HealthMate AI personalize my experience?</AccordionTrigger>
            <AccordionContent>
              We use your health data, preferences, and goals to generate tailored insights and recommendations—always with your privacy in mind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Is my data secure and private?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We use industry-standard encryption and never share your data without your explicit consent.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Can I connect HealthMate AI with other apps?</AccordionTrigger>
            <AccordionContent>
              Yes! HealthMate AI seamlessly integrates with popular health and fitness apps for a unified experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>Is there a free trial for Pro?</AccordionTrigger>
            <AccordionContent>
              Yes, you can try Pro features free for 14 days—no credit card required.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-white dark:bg-blue-950/70 rounded-2xl shadow-lg p-8 flex flex-col gap-6 fade-in" aria-label="Contact form">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
            <Input id="name" name="name" type="text" required autoComplete="name" className="bg-gray-50 dark:bg-blue-900/60" aria-required="true" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <Input id="email" name="email" type="email" required autoComplete="email" className="bg-gray-50 dark:bg-blue-900/60" aria-required="true" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea id="message" name="message" required rows={4} className="bg-gray-50 dark:bg-blue-900/60 rounded-lg border border-border p-2 resize-none" aria-required="true" />
          </div>
          <Button type="submit" size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-white dark:bg-background py-8 mt-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 dark:text-gray-400 text-sm">
          <div>
            &copy; {new Date().getFullYear()} HealthMate AI. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
