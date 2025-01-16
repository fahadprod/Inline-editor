'use client';

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  const emailHeaderConfig = {
    selector: '.tinymce-heading',
    menubar: false,
    inline: true,
    plugins: [
      'lists',
      'powerpaste',
      'autolink'
    ],
    toolbar: 'undo redo | bold italic underline',
    valid_elements: 'strong,em,span[style],a[href]',
    valid_styles: {
      '*': 'font-size,font-family,color,text-decoration,text-align'
    },
    powerpaste_word_import: 'clean',
    powerpaste_html_import: 'clean',
  };
  
  const emailBodyConfig = {
    selector: '.tinymce-body',
    menubar: false,
    inline: true,
    plugins: [
      'link', 'lists', 'powerpaste',
      'autolink', 'tinymcespellchecker'
    ],
    toolbar: [
      'undo redo | bold italic underline | fontfamily fontsize',
      'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
    ],
    valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
    valid_styles: {
      '*': 'font-size,font-family,color,text-decoration,text-align'
    },
    powerpaste_word_import: 'clean',
    powerpaste_html_import: 'clean',
  };
  
  useEffect(() => {
    tinymce.init(emailHeaderConfig);
    tinymce.init(emailBodyConfig);
  }, []);

  return (
    <div class="demo-inline">
  <div class="container">
    {/* <p><img src="../_images/tiny-banner.png" style={{width: '100%'}} /></p> */}
    <h1 class="tinymce-heading">The world&rsquo;s first rich text editor in the cloud</h1>
    <p><img src="https://www.tiny.cloud/images/image-two.jpg" /></p>
    <div class="tinymce-body">
      <p>Have you heard about Tiny Cloud? It&rsquo;s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 50,000 developers already agree. They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. They&rsquo;re also ready for some exciting updates coming soon.</p>
      <p>One of these enhancements is <strong>Tiny Drive</strong>: imagine file management for TinyMCE, in the cloud, made super easy. Learn more at <a href="../../../tinydrive/">tiny.cloud/tinydrive</a>, where you&rsquo;ll find a working demo and an opportunity to provide feedback to the product team.</p>
    </div>
  </div>
  <h2 class="tinymce-heading">An editor for every project</h2>
  <div class="tinymce-body">
    <p>Here are some of our customer&rsquo;s most common use cases for TinyMCE:</p>
    <ul>
    <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
    <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
    <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
    <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
    <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
    </ul>
    <p>And those use cases are just the start. TinyMCE is incredibly flexible, and with hundreds of APIs there&rsquo;s likely a solution for your editor project. If you haven&rsquo;t experienced Tiny Cloud, get started today. You&rsquo;ll even get a free trial of our premium plugins &ndash; no credit card required!</p>
  </div>
</div>
  );
}
