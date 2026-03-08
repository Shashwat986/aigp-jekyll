---
title: Contact Us
permalink: /contact/
layout: page
description: "Contact Us. Looking for Indians who are interested in the game of Go? Join our community, or get in touch!"
---
<div class="text-center mb-5">
    <h2 class="h4">Contact Us</h2>
    <p class="text-muted small">
        We're always available to help out anyone who has questions. Please feel free to contact us using the form below
    </p>
</div>

<div class="py-2">
    <div class="card shadow-sm mb-4 justify-content-centre">
        <div class="card-body p-4">
            <form action="https://formspree.io/f/mayajnov" method="POST" id="contact-form">
                <div class="mb-3">
                    <label for="email" class="form-label">Your email:</label>
                    <input type="email" name="_replyto" id="email" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Your message:</label>
                    <textarea name="message" id="message" class="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Send</button>
            </form>
        </div>
    </div>

    <div class="text-center fst-italic">
        <p class="small text-muted">
        {% include call.html %}
        </p>
    </div>
</div>

