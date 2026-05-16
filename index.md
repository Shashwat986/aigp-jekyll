---
title: Association Of Indian Go Players
layout: home
description: The official website of the Association Of Indian Go Players (AIGP). Promoting the game of Go in India.
intro_image: "assets/images/illustrations/pointing.svg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: false
---

<div class="alert alert-info text-center mb-5 shadow-sm">
    <p class="mb-0">
        The AIGP represents the Go playing community in India. We welcome all Go players in India to join us and participate in our events.
    </p>
</div>

<div class="row row-cols-2 row-cols-md-4 g-2 mb-5">
    {% for i in (1..8) %}
    <div class="col">
        <img src="{{ '/assets/images/home/home_' | append: i | append: '.jpeg' | relative_url }}" class="img-fluid rounded shadow-sm w-100" style="height: 150px; object-fit: cover;" alt="Home image {{ i }}">
    </div>
    {% endfor %}
</div>

<div class="row mb-5">
    <div class="col-lg-7 mb-4">
        <div class="card h-100 shadow-sm">
            <div class="card-header bg-gray py-3">
                <h4 class="card-title mb-0">Become a Member</h4>
            </div>
            <div class="card-body p-4">
                <p class="mb-4">
                    Join the AIGP and meet like-minded Go players across India!
                </p>
                <form action="https://gmail.us6.list-manage.com/subscribe/post" method="post" target="_blank" id="membership-form">
                    <input type="hidden" name="u" value="4fd58232bb8466eaa9cb5ce1b">
                    <input type="hidden" name="id" value="477349c5a7">

                    <div class="row mb-3">
                        <label for="mce-NAME" class="col-sm-3 col-form-label">Name</label>
                        <div class="col-sm-9">
                            <input type="text" name="NAME" class="form-control rounded-pill" id="mce-NAME" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="mce-EMAIL" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                            <input type="email" name="EMAIL" class="form-control rounded-pill" id="mce-EMAIL" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="mce-MMERGE6" class="col-sm-3 col-form-label">Rank</label>
                        <div class="col-sm-9">
                            <select name="MMERGE6" id="mce-MMERGE6" class="form-select rounded-pill">
                                <option>Newbie</option>
                                <option>Know the rules</option>
                                <option>30k to 15k</option>
                                <option>15k to 5k</option>
                                <option>5k to 1k</option>
                                <option>1d+</option>
                            </select>
                        </div>
                    </div>

                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input type="text" name="b_4fd58232bb8466eaa9cb5ce1b_477349c5a7" tabindex="-1" value="">
                    </div>

                    <div class="row">
                        <div class="col-sm-9 offset-sm-3">
                            <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="btn btn-danger px-5 rounded-pill">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="col-lg-5 mb-4">
        <div class="card h-100 shadow-sm border-0 bg-light">
            <div class="card-body p-4">
                <h5 class="card-title text-center mb-4">Association Activities</h5>
                <ul class="list-unstyled">
                    <li class="mb-3 d-flex align-items-start">
                        <i class="fa fa-calendar-check-o text-danger mt-1 me-3"></i>
                        <span>Weekly Sessions on Sundays at 6pm</span>
                    </li>
                    <li class="mb-3 d-flex align-items-start">
                        <i class="fa fa-comments-o text-danger mt-1 me-3"></i>
                        <span>Active Telegram and WhatsApp Community</span>
                    </li>
                    <li class="mb-3 d-flex align-items-start">
                        <i class="fa fa-users text-danger mt-1 me-3"></i>
                        <span>Community Outreach within India</span>
                    </li>
                    <li class="mb-3 d-flex align-items-start">
                        <i class="fa fa-globe text-danger mt-1 me-3"></i>
                        <span>International Go events visibility</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
    <div class="col">
        <div class="card h-100 shadow-sm border-0">
            <div class="card-body text-center p-4 d-flex flex-column">
                <div class="mb-3 fs-1 text-danger">
                    <i class="fa fa-book"></i>
                </div>
                <h4 class="card-title h5 fw-bold">Learn Go</h4>
                <p class="card-text small text-muted">
                    Regularly-updated list of resources for players of all levels to learn Go.
                </p>
                <a href="{{ '/learn/' | relative_url }}" class="btn btn-sm btn-outline-danger rounded-pill mt-auto align-self-center">Learn More</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100 shadow-sm border-0">
            <div class="card-body text-center p-4 d-flex flex-column">
                <div class="mb-3 fs-1 text-danger">
                    <i class="fa fa-commenting-o"></i>
                </div>
                <h4 class="card-title h5 fw-bold">Join our Community</h4>
                <p class="card-text small text-muted">
                    Active on many platforms. Reach out to us or watch our weekly session recordings.
                </p>
                <a href="{{ '/community/' | relative_url }}" class="btn btn-sm btn-outline-danger rounded-pill mt-auto align-self-center">Learn More</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100 shadow-sm border-0">
            <div class="card-body text-center p-4 d-flex flex-column">
                <div class="mb-3 fs-1 text-danger">
                    <i class="fa fa-map-marker"></i>
                </div>
                <h4 class="card-title h5 fw-bold">Meet Us</h4>
                <p class="card-text small text-muted">
                    We meet virtually, but our players are spread globally. We'd love to meet you!
                </p>
                <a href="{{ '/contact/' | relative_url }}" class="btn btn-sm btn-outline-danger rounded-pill mt-auto align-self-center">Learn More</a>
            </div>
        </div>
    </div>
</div>

