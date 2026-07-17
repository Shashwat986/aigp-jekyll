---
title: Contact Us
permalink: /contact/
layout: page
description: "Contact Us. Looking for Indians who are interested in the game of Go? Join our community, or get in touch!"
---
<div class="text-center mb-8">
    <h1 class="text-3xl font-bold font-serif text-[var(--heading-color)] mb-2">Contact Us</h1>
    <p class="text-sm text-[var(--secondary-text-color)] max-w-md mx-auto">
        We're always available to help out anyone who has questions. Please read the official contact path first, then use the form below if your message still belongs here.
    </p>
</div>

<div class="py-4 max-w-5xl w-full mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div class="space-y-6">
            <section class="official-card">
                <div class="official-card__body">
                    <span class="official-card__meta">Before You Write</span>
                    <h2 class="official-card__title">Please read the contact path first</h2>
                    <p class="official-card__text">For selection, representation, tournament, conduct, or unresolved organizer questions, the escalation page explains who to contact and what details to include.</p>
                    <p class="mt-5">
                        <a class="button button-secondary" href="{{ '/contact-escalation/' | relative_url }}">Read Contact Escalation</a>
                    </p>
                </div>
            </section>

            <div class="official-card official-card--flat text-center text-sm">
                {% include call.html %}
            </div>
        </div>

        <div class="bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] shadow-xl rounded-2xl w-full transition-all duration-300">
            <div class="p-6 md:p-8">
                <form action="https://formspree.io/f/mayajnov" method="POST" id="contact-form" class="space-y-6">
                    {% include honeypot-field.html name="_gotcha" id="contact-gotcha" %}
                    <div>
                        <label for="email" class="block text-sm font-semibold mb-2">Your email</label>
                        <input type="email" name="_replyto" id="email" class="w-full px-4 py-2.5 bg-[var(--bg-color)] text-[var(--text-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all" required>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-semibold mb-2">Your message</label>
                        <textarea name="message" id="message" class="w-full px-4 py-2.5 bg-[var(--bg-color)] text-[var(--text-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all" rows="7" required></textarea>
                    </div>
                    <button type="submit" class="button button-primary w-full shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center cursor-pointer">Send</button>
                </form>
            </div>
        </div>
    </div>
</div>
