import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Python Course',
    tagline: 'A free python course for everyone',
    favicon: 'img/favicon.ico',
    organizationName: 'Frisk Technologies',
    projectName: 'python-course',

    // Set the production url of your site here
    url: 'https://python.kadenfrisk.com', // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    onBrokenLinks: 'throw', // Control what happens when a Markdown link is broken
    onBrokenMarkdownLinks: 'warn',


    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en', locales: ['en', 'fa'], path: 'i18n', localeConfigs: {
            en: {
                label: 'English', direction: 'ltr', htmlLang: 'en-US', calendar: 'gregory',
            },
        },
    },

    presets: [['classic', {
        docs: {
            sidebarPath: './sidebars.ts',
        }, blog: {
            showReadingTime: true, // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
        }, theme: {
            customCss: './src/css/custom.css',
        },
    } satisfies Preset.Options,],],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg', navbar: {
            title: 'Fluffy\'s Python Course', logo: {
                alt: 'My Site Logo', src: 'img/Logo.png',
            }, items: [{
                type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial',
            },],
        }, footer: {
            style: 'dark', links: [{
                title: 'Docs', items: [{
                    label: 'Tutorial', to: '/docs/intro',
                },],
            }, {
                title: 'Community', items: [{
                    label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                }, {
                    label: 'Discord', href: 'https://discordapp.com/invite/docusaurus',
                }, {
                    label: 'Twitter', href: 'https://twitter.com/docusaurus',
                },],
            }, {
                title: 'More', items: [{
                    label: 'Blog', to: '/blog',
                }, {
                    label: 'GitHub', href: 'https://github.com/facebook/docusaurus',
                },],
            },], copyright: `Copyright © ${new Date().getFullYear()} Kaden Frisk. Built with Docusaurus.`,
        }, prism: {
            theme: prismThemes.github, darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;