use leptos::prelude::*;

/// Default Home Page
#[component]
pub fn Home() -> impl IntoView {
    let (sidebar_collapsed, set_sidebar_collapsed) = signal(false);

    let toggle_sidebar = move |_| {
        set_sidebar_collapsed.update(|v| *v = !*v);
    };

    view! {
        <ErrorBoundary fallback=|errors| {
            view! {
                <h1>"Uh oh! Something went wrong!"</h1>

                <p>"Errors: "</p>
                // Render a list of errors as strings - good for development purposes
                <ul>
                    {move || {
                        errors
                            .get()
                            .into_iter()
                            .map(|(_, e)| view! { <li>{e.to_string()}</li> })
                            .collect_view()
                    }}

                </ul>
            }
        }>
            <biz-application-shell
                variant="default"
                prop:sidebarCollapsed=move || sidebar_collapsed.get()
            >
                <div slot="header-slot" style="padding: 1rem; font-weight: bold">
                    Header Content
                </div>
                <div slot="sidebar-slot" style="padding: 1rem; color: #fff">
                    <nav aria-label="Main Navigation">
                        <ul>
                            <li>
                                <a href="#link1" style="color: #fff">
                                    Menu Item 1
                                </a>
                            </li>
                            <li>
                                <a href="#link2" style="color: #fff">
                                    Menu Item 2
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button id="sidebarCollapsedButton" on:click=toggle_sidebar>
                        toggle
                    </button>
                </div>
                <div>
                    <h1>Main Content Area</h1>
                    <p>This is the main content of the application shell.</p>
                    <biz-card-container></biz-card-container>
                </div>
                <div slot="footer-slot" style="padding: 1rem; text-align: center">
                    Footer Content
                </div>
            </biz-application-shell>
        </ErrorBoundary>
    }
}
