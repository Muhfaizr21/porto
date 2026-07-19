import React from 'react';

const GitHubActivity = () => {
  return (
    <section id="github" className="py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <p className="label-sm text-brand-600 mb-4">GitHub</p>
            <h2 className="heading-lg text-primary">Open source activity</h2>
          </div>
          <a href="https://github.com/Muhfaizr21" target="_blank" rel="noreferrer"
            className="text-sm text-secondary hover:text-primary border-b border-outline-variant hover:border-primary transition-all pb-0.5">
            View profile →
          </a>
        </div>

        <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/40">
          <img src="https://ghchart.rshah.org/Muhfaizr21" alt="GitHub contributions"
            className="w-full rounded-lg"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'block'; }} />
          <p className="hidden text-sm text-secondary text-center py-8">
            Chart unavailable. <a href="https://github.com/Muhfaizr21" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">View on GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
