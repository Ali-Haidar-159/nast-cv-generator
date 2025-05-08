/**
 * Professional Tips Panel Implementation
 * Shows a sliding panel with resume tips when the "Need help?" button is clicked
 * Designed with modern UI standards and professional color scheme
 */

document.addEventListener("DOMContentLoaded", function () {
  // Create the tips panel
  createTipsPanel();

  // Add event listener to the "Need help?" link
  const helpLink = document.querySelector(".help-link");
  if (helpLink) {
    helpLink.addEventListener("click", function (e) {
      e.preventDefault();
      showTipsPanel();
    });
  }

  // Function to create the tips panel
  function createTipsPanel() {
    const tipsPanel = document.createElement("div");
    tipsPanel.className = "tips-panel";
    tipsPanel.id = "tipsPanel";

    // Create main content
    tipsPanel.innerHTML = `
      <div class="tips-panel-content">
        <div class="tips-header">
          <div class="header-left">
            <svg class="tips-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            <h2>Resume Tips</h2>
          </div>
          <button class="tips-close-btn" aria-label="Close tips panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div class="search-container">
          <div class="search-input-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="tipSearch" class="search-input" placeholder="Search tips...">
          </div>
        </div>
        
        <div class="tips-sections-container">
          <div class="tips-section active" data-section="general">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon general-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                <h3>General</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Keep your sentences short and sweet.</li>
                <li>Sort your sections in 'Design', such that more important sections (e.g. professional experience & education) come before other sections.</li>
                <li>Stick to a reverse-chronological order for your section entries that have dates. We automatically do this for you by default.</li>
                <li>Always view your resume from the lens of the employer. What can you do for them?</li>
                <li>Don't start sentences with 'I' or 'my' but with action words instead.</li>
                <li>Always use active voice, never passive voice.</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="action">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon action-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <h3>Action Words</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <div class="tip-intro">
                <p>When describing an experience in your resume, aim to express yourself clearly and concisely. Here are a few words you might like to use. Using a thesaurus can help you find others:</p>
              </div>
              
              <div class="action-words-container">
                <div class="action-category">
                  <h4>Achievement</h4>
                  <div class="words-list">
                    <span class="word-pill">accelerated</span>
                    <span class="word-pill">accomplished</span>
                    <span class="word-pill">achieved</span>
                    <span class="word-pill">carried out</span>
                    <span class="word-pill">completed</span>
                    <span class="word-pill">improved</span>
                    <span class="word-pill">delivered</span>
                    <span class="word-pill">enhanced</span>
                    <span class="word-pill">finished</span>
                    <span class="word-pill">negotiated</span>
                    <span class="word-pill">obtained</span>
                    <span class="word-pill">produced</span>
                    <span class="word-pill">secured</span>
                    <span class="word-pill">increased</span>
                    <span class="word-pill">doubled</span>
                    <span class="word-pill">implemented</span>
                  </div>
                </div>
                
                <div class="action-category">
                  <h4>Communication</h4>
                  <div class="words-list">
                    <span class="word-pill">advised</span>
                    <span class="word-pill">participated</span>
                    <span class="word-pill">chaired meeting</span>
                    <span class="word-pill">wrote</span>
                    <span class="word-pill">instructed</span>
                    <span class="word-pill">demonstrated</span>
                    <span class="word-pill">edited</span>
                    <span class="word-pill">presented</span>
                    <span class="word-pill">discussed</span>
                    <span class="word-pill">promoted</span>
                    <span class="word-pill">persuaded</span>
                    <span class="word-pill">recommended</span>
                  </div>
                </div>
                
                <div class="action-category">
                  <h4>Taking initiative</h4>
                  <div class="words-list">
                    <span class="word-pill">created</span>
                    <span class="word-pill">formulated</span>
                    <span class="word-pill">designed</span>
                    <span class="word-pill">established</span>
                    <span class="word-pill">introduced</span>
                    <span class="word-pill">devised</span>
                    <span class="word-pill">started</span>
                    <span class="word-pill">developed</span>
                    <span class="word-pill">set up</span>
                    <span class="word-pill">launched</span>
                    <span class="word-pill">initiated</span>
                    <span class="word-pill">enabled</span>
                  </div>
                </div>
                
                <div class="action-category">
                  <h4>Research</h4>
                  <div class="words-list">
                    <span class="word-pill">classified</span>
                    <span class="word-pill">differentiated</span>
                    <span class="word-pill">investigated</span>
                    <span class="word-pill">determined</span>
                    <span class="word-pill">experimented</span>
                    <span class="word-pill">equated</span>
                    <span class="word-pill">searched</span>
                    <span class="word-pill">developed</span>
                    <span class="word-pill">surveyed</span>
                    <span class="word-pill">examined</span>
                    <span class="word-pill">indexed</span>
                    <span class="word-pill">compiled</span>
                    <span class="word-pill">catalogued</span>
                  </div>
                </div>
                
                <div class="action-category">
                  <h4>Organising and planning</h4>
                  <div class="words-list">
                    <span class="word-pill">distributed</span>
                    <span class="word-pill">reorganized</span>
                    <span class="word-pill">arranged</span>
                    <span class="word-pill">restructured</span>
                    <span class="word-pill">budgeted</span>
                    <span class="word-pill">verified</span>
                    <span class="word-pill">scheduled</span>
                    <span class="word-pill">computed</span>
                    <span class="word-pill">planned</span>
                    <span class="word-pill">produced</span>
                  </div>
                </div>
                
                <div class="action-category">
                  <h4>Interpersonal</h4>
                  <div class="words-list">
                    <span class="word-pill">advised</span>
                    <span class="word-pill">negotiated</span>
                    <span class="word-pill">consulted</span>
                    <span class="word-pill">evaluated</span>
                    <span class="word-pill">proposed</span>
                    <span class="word-pill">handled</span>
                    <span class="word-pill">sorted out</span>
                    <span class="word-pill">collaborated</span>
                    <span class="word-pill">discussed</span>
                    <span class="word-pill">mediated</span>
                    <span class="word-pill">facilitated</span>
                  </div>
                </div>
                
                <div class="action-category">
                  <h4>Leadership</h4>
                  <div class="words-list">
                    <span class="word-pill">directed</span>
                    <span class="word-pill">supervised</span>
                    <span class="word-pill">motivated</span>
                    <span class="word-pill">guided</span>
                    <span class="word-pill">managed</span>
                    <span class="word-pill">led</span>
                    <span class="word-pill">organized</span>
                    <span class="word-pill">undertook</span>
                  </div>
                </div>
                
                <div class="action-category">
                  <h4>Managing</h4>
                  <div class="words-list">
                    <span class="word-pill">organized</span>
                    <span class="word-pill">implemented</span>
                    <span class="word-pill">established</span>
                    <span class="word-pill">produced</span>
                    <span class="word-pill">initiated</span>
                    <span class="word-pill">attained</span>
                    <span class="word-pill">maintained</span>
                  </div>
                </div>
                
                <div class="action-category">
                  <h4>Problem solving</h4>
                  <div class="words-list">
                    <span class="word-pill">analyzed</span>
                    <span class="word-pill">diagnosed</span>
                    <span class="word-pill">reduced</span>
                    <span class="word-pill">increased</span>
                    <span class="word-pill">simplified</span>
                    <span class="word-pill">evaluated</span>
                    <span class="word-pill">synthesised</span>
                    <span class="word-pill">tackled</span>
                    <span class="word-pill">investigated</span>
                    <span class="word-pill">reviewed</span>
                    <span class="word-pill">identified</span>
                    <span class="word-pill">refined</span>
                    <span class="word-pill">streamlined</span>
                    <span class="word-pill">examined</span>
                    <span class="word-pill">reorganized</span>
                    <span class="word-pill">solved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tips-section" data-section="personal">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon personal-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <h3>Personal Details</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <div class="tip-card">
                <div class="tip-card-header">
                  <svg class="tip-card-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  <h4>Maximize Your Details</h4>
                </div>
                <p>Check out the "more"-button in our personal details section to add more details about yourself. Adding "Nationality" and "Birthday" is generally NOT recommended, however it is required in some countries.</p>
              </div>
              
              <div class="tip-card">
                <div class="tip-card-header">
                  <svg class="tip-card-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                  <h4>Photo Tips</h4>
                </div>
                <ul class="tips-list">
                  <li>When choosing a photo, make sure it is not older than 2 years.</li>
                  <li>Try to choose a photo where your clothing matches the dress code of the desired position (Hint: check out how employees of the company are presenting themselves on LinkedIn or on the company website).</li>
                </ul>
              </div>
              
              <div class="tip-card">
                <div class="tip-card-header">
                  <svg class="tip-card-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <h4>Contact Information</h4>
                </div>
                <ul class="tips-list">
                  <li>Use a professional Email-address. Something along the lines of 'firstname.lastname@gmail.com' cuts it, 'abbygirl129@gmail.com' doesn't.</li>
                  <li>The 'display'-email address you show in your resume and the one for your account don't need to be the same.</li>
                  <li>Don't add your Facebook or Instagram, unless you are a professional blogger or social media manager.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="tips-section" data-section="profile">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon profile-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                <h3>Profile</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Focus on your motivations, skills and ideas you are able to contribute rather than staying generic.</li>
                <li>Use keywords relevant to your desired position wherever possible in order to pass applicant tracking systems scanning for them.</li>
                <li>Limit yourself to 2-5 short phrases.</li>
                <li>Be as concrete as possible and include tangible facts when writing about yourself.</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="education">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon education-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                <h3>Education</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Only list your GPA if it is a) being asked for or b) you managed to get an above-average one.</li>
                <li>When listing your GPA, make sure to include a point of reference for recruiters (e.g. 'GPA 1.1 / 5, Top 5% of class').</li>
                <li>If you didn't graduate (yet), still state achieved credits towards your degree.</li>
                <li>Consider leaving out primary & secondary school.</li>
                <li>Use past tense for your description. Use present tense if you still perform an action.</li>
                <li>When writing your description, check our list of Action Words.</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="experience">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon experience-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <h3>Professional Experience</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Focus on your achievements rather than your duties.</li>
                <li>Quantify experiences to convey size and/or scale of projects, budgets and results.</li>
                <li>If you use bullets in your description, sort them by importance.</li>
                <li>Use keywords relevant to your desired position wherever possible in order to pass applicant tracking systems scanning for them.</li>
                <li>Use our "Present" option if you are still employed at the company.</li>
                <li>It's best practice to sort your professional experience in chronologically descending order, starting with the most recent entry. We do this automatically for you, but you can still switch things around manually.</li>
                <li>Start your sentences with action words like "created", "developed", "planned", etc.</li>
                <li>Use past tense for your description. Use present tense if you still perform an action.</li>
                <li>When writing your description, check our list of Action Words.</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="custom">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon custom-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <h3>Custom</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Let your creativity flow.</li>
                <li>You might use custom sections to combine several sections.</li>
                <li>Use past tense for your description. Use present tense if you still perform an action.</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="skills">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon skills-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <h3>Skills</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Try different designs for showing of your skills, like bars or dots under "Design".</li>
                <li>If you want to sort your skills into sub-sections (e.g. soft skills & hard skills), we recommend creating a new custom section.</li>
                <li>Select skills according to your desired position.</li>
                <li>Be specific with skills and add proof if possible, e.g. "Microsoft Office, incl. VBA Macros".</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="languages">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon languages-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h5M3 6h4M3 18h4M16 12h6M15 6h6M15 18h6M12 2v20M8 7l7 7M15 7l-7 7"/></svg>
                <h3>Languages</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Make sure to try the available different designs for listing languages, like bars or dots in the Design-Section.</li>
                <li>In "Additional information", try to prove your fluency level. This can be done by including test results or certificates, but also by stating e.g. "lived for 5 months in .."</li>
                <li>Be honest about your language level.</li>
                <li>If you do not have objective test results at hand, it can help to incorporate examples from past professional experiences where you had to use a foreign language.</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="interests">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon interests-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <h3>Interests</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Don't be afraid to list interests on your resume, as they give employers insight into what drives you as a well-rounded individual and might add a further differentiator to your resume.</li>
                <li>Refrain from listing broad, common interests like "meeting friends".</li>
                <li>Avoid listing interests that are related to religion, politics or anything controversial.</li>
                <li>If you have dangerous interests or hobbies, maybe don't put them in your resume.</li>
                <li>Position this section more to the bottom of your resume (definitely after your professional experience and education).</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="projects">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon projects-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                <h3>Projects</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Mention the size, scope & scale of the project.</li>
                <li>Include project outcomes and what you have learned.</li>
                <li>Use past tense for your description. Use present tense if you still perform an action.</li>
                <li>When writing your description, check our list of Action Words.</li>
              </ul>
            </div>
          </div>
          
          <div class="tips-section" data-section="courses">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon courses-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                <h3>Courses</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Past courses shouldn't be the star of the show but rather the icing on the cake. Hence, put this section below your professional experience and education.</li>
                <li>Keep it relevant - only list courses which gave you qualifications that add value to the job for which you are applying.</li>
                <li>Prepare to be quizzed about what you learned during the interview phase, so only put courses in your resume you still know the ins and outs of.</li>
                <li>For added effect, state how you were able to apply the course's content in practice.</li>
                <li>Use past tense for your description. Use present tense if you still perform an action.</li>
                <li>When writing your description, check our list of Action Words.</li>
              </ul>
            </div>
          </div>

          <div class="tips-section" data-section="awards">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon awards-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                <h3>Awards</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Include tangible facts like the total number of contestants (i.e. "3rd place out of 245 contestants")</li>
                <li>Prove your ability as a team player by mentioning whether you were part of a team.</li>
                <li>Awards can be student competitions, industry accolades or company-wide recognitions for great performance like being nominated for a talent program.</li>
                <li>When writing your description, check our list of Action Words.</li>
              </ul>
            </div>
          </div>

          <div class="tips-section" data-section="organisations">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon organisations-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                <h3>Organisations</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Mention what you have achieved and learned.</li>
                <li>Use past tense for your description. Use present tense if you still perform an action.</li>
                <li>When writing your description, check our list of Action Words.</li>
              </ul>
            </div>
          </div>

          <div class="tips-section" data-section="publications">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon publications-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                <h3>Publications</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Make sure to list all authors of the paper (not only yourself).</li>
                <li>When your academic research of yours isn't published yet, rename this section to e.g. 'Academic Research'.</li>
                <li>If you are not applying to a job where publications are important (e.g. academia), do not use this section. Instead, put your thesis / research into the corresponding education entry.</li>
              </ul>
            </div>
          </div>

          <div class="tips-section" data-section="references">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon references-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <h3>References</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <div class="tip-card">
                <div class="tip-card-header">
                  <svg class="tip-card-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                  <h4>Preparation Is Key</h4>
                </div>
                <ul class="tips-list">
                  <li>Make sure to brief your references before you put their contact data into your resume.</li>
                  <li>Of course, make sure not to include anybody who might say negative things about your past performance.</li>
                </ul>
              </div>
              
              <div class="tip-card">
                <div class="tip-card-header">
                  <svg class="tip-card-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <h4>Ideal References</h4>
                </div>
                <p>Good references include, but are not limited to:</p>
                <ul class="tips-list reference-list">
                  <li>Your former boss (either direct or some levels up in the organisation)</li>
                  <li>A colleague, either from your department or a department you worked with regularly</li>
                  <li>Former teachers or professors</li>
                  <li>Business partners directly engaged with</li>
                  <li>A contact working at the company you are applying to</li>
                </ul>
              </div>
              
              <div class="tip-alert">
                <svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <p>Refrain from using private references (e.g. friends, family) as they make the impression that you couldn't find professional ones and don't add much value to your resume.</p>
              </div>
            </div>
          </div>

          <div class="tips-section" data-section="certificates">
            <div class="tips-section-header">
              <div class="section-header-left">
                <svg class="section-icon certificates-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                <h3>Certificates</h3>
              </div>
              <span class="tips-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
            <div class="tips-section-content">
              <ul class="tips-list">
                <li>Include certificates that add value to the job you are applying for (e.g. a driver's license for a sales job).</li>
                <li>Certificates shouldn't be the star of the show but rather the icing on the cake. Hence, put this section below your professional experience and education.</li>
                <li>Certificate titles are usually heavy on acronyms (e.g. CPA for Certified Public Account, CDL for Commercial Driver's license). Make sure to write them out as well.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(tipsPanel);

    // Add event listener to close button
    const closeBtn = tipsPanel.querySelector(".tips-close-btn");
    closeBtn.addEventListener("click", function () {
      hideTipsPanel();
    });

    // Add event listeners to section headers
    const sectionHeaders = tipsPanel.querySelectorAll(".tips-section-header");
    sectionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const section = this.closest(".tips-section");
        toggleSection(section);
      });
    });

    // Add search functionality
    const searchInput = document.getElementById("tipSearch");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        filterTipSections(this.value.trim().toLowerCase());
      });
    }

    // Add styles
    const tipsPanelStyles = document.createElement("style");
    tipsPanelStyles.textContent = `
      .tips-panel {
        position: fixed;
        top: 0;
        right: -450px;
        width: 450px;
        height: 100vh;
        background-color: #fff;
        box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transition: right 0.3s ease;
        overflow-y: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        border-left: 1px solid #e0e0e0;
      }
      
      .tips-panel.visible {
        right: 0;
      }
      
      .tips-panel-content {
        padding: 0;
        height: 100%;
      }
      
      .tips-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid #e0e0e0;
        background-color: #ffffff;
        position: sticky;
        top: 0;
        z-index: 10;
      }
      
      .header-left {
        display: flex;
        align-items: center;
      }
      
      .tips-icon {
        color: #4a6cf7;
        margin-right: 10px;
      }
      
      .tips-header h2 {
        font-size: 20px;
        color: #333;
        margin: 0;
        font-weight: 600;
      }
      
      .tips-close-btn {
        background: transparent;
        border: none;
        color: #999;
        cursor: pointer;
        padding: 5px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.2s ease;
      }
      
      .tips-close-btn:hover {
        color: #333;
      }
      
      .search-container {
        padding: 10px 20px;
        border-bottom: 1px solid #e0e0e0;
        background-color: #f9f9f9;
      }
      
      .search-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 8px;
        border: 1px solid #ddd;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }
      
      .search-input-wrapper svg {
        margin-left: 10px;
        color: #999;
      }
      
      .search-input {
        width: 100%;
        padding: 10px;
        border: none;
        outline: none;
        font-size: 14px;
      }
      
      .tips-sections-container {
        overflow-y: auto;
        max-height: calc(100vh - 120px);
      }
      
      .tips-section {
        border-bottom: 1px solid #f0f0f0;
        transition: background-color 0.2s ease;
      }
      
      .tips-section:hover {
        background-color: #f9f9f9;
      }
      
      .tips-section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        cursor: pointer;
      }
      
      .section-header-left {
        display: flex;
        align-items: center;
      }
      
      .section-icon {
        margin-right: 12px;
      }
      
      .general-icon, .profile-icon { color: #4a6cf7; }
      .action-icon { color: #f7664a; }
      .personal-icon { color: #4acaf7; }
      .education-icon { color: #f74ac8; }
      .experience-icon { color: #4af776; }
      .custom-icon { color: #f7c84a; }
      .skills-icon { color: #c84af7; }
      .languages-icon { color: #4af7c8; }
      .interests-icon { color: #f74a6c; }
      .projects-icon { color: #4af7a6; }
      .courses-icon { color: #f7a64a; }
      .awards-icon { color: #a64af7; }
      .organisations-icon { color: #4aa6f7; }
      .publications-icon { color: #a6f74a; }
      .references-icon { color: #f74aa6; }
      .certificates-icon { color: #4a76f7; }
      
      .tips-section-header h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }
      
      .tips-section-content {
        padding: 5px 20px 20px 52px;
        display: none;
        animation: fadeIn 0.3s ease;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .tips-section.active {
        background-color: #f5f9ff;
        border-bottom: 1px solid #e0e6f0;
      }
      
      .tips-section.active .tips-section-content {
        display: block;
      }
      
      .tips-section.active .tips-chevron svg {
        transform: rotate(180deg);
      }
      
      .tips-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      
      .tips-list li {
        position: relative;
        padding-left: 20px;
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 1.6;
        color: #444;
      }
      
      .tips-list li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 8px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #4a6cf7;
      }
      
      .reference-list li::before {
        background-color: #f74a6c;
      }
      
      .tip-intro {
        margin-bottom: 20px;
      }
      
      .tip-intro p {
        font-size: 14px;
        line-height: 1.6;
        color: #444;
        margin: 0 0 15px 0;
      }
      
      .action-words-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .action-category h4 {
        font-size: 15px;
        font-weight: 600;
        color: #333;
        margin: 0 0 10px 0;
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
      }
      
      .words-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      
      .word-pill {
        display: inline-block;
        padding: 4px 10px;
        background-color: #f5f7fd;
        border: 1px solid #e0e6f0;
        border-radius: 20px;
        font-size: 12px;
        color: #4a6cf7;
        transition: all 0.2s ease;
        cursor: default;
      }
      
      .word-pill:hover {
        background-color: #e0e6f0;
        color: #3a5de7;
      }
      
      .tips-section-content h4 {
        font-size: 15px;
        font-weight: 600;
        color: #333;
        margin: 20px 0 10px;
      }
      
      .tips-section-content p {
        font-size: 14px;
        line-height: 1.6;
        color: #444;
        margin: 0 0 15px 0;
      }
      
      .tips-chevron {
        display: flex;
        align-items: center;
        color: #999;
        transition: transform 0.3s ease;
      }
      
      .tips-section.active .tips-chevron {
        color: #4a6cf7;
      }
      
      .tips-section.active .tips-chevron svg {
        transform: rotate(180deg);
      }
      
      .tip-card {
        background-color: #fff;
        border-radius: 8px;
        border: 1px solid #e0e6f0;
        padding: 15px;
        margin-bottom: 15px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }
      
      .tip-card-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
      
      .tip-card-icon {
        color: #4a6cf7;
        margin-right: 10px;
      }
      
      .tip-card h4 {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: #333;
      }
      
      .tip-card p {
        margin: 0;
        font-size: 14px;
        line-height: 1.6;
        color: #444;
      }
      
      .tip-card .tips-list {
        margin-top: 10px;
      }
      
      .tip-alert {
        display: flex;
        align-items: flex-start;
        background-color: #fff8e1;
        border-left: 4px solid #ffc107;
        padding: 12px 15px;
        border-radius: 4px;
        margin-top: 20px;
      }
      
      .alert-icon {
        color: #ffc107;
        margin-right: 10px;
        flex-shrink: 0;
        margin-top: 2px;
      }
      
      .tip-alert p {
        margin: 0;
        font-size: 14px;
        line-height: 1.6;
        color: #444;
      }
      
      @media (max-width: 768px) {
        .tips-panel {
          width: 100%;
          right: -100%;
        }
        
        .word-pill {
          font-size: 11px;
        }
      }
    `;

    document.head.appendChild(tipsPanelStyles);
  }

  // Function to show the tips panel
  function showTipsPanel() {
    const tipsPanel = document.getElementById("tipsPanel");
    tipsPanel.classList.add("visible");
    document.body.style.overflow = "hidden"; // Prevent scrolling of the main page
  }

  // Function to hide the tips panel
  function hideTipsPanel() {
    const tipsPanel = document.getElementById("tipsPanel");
    tipsPanel.classList.remove("visible");
    document.body.style.overflow = ""; // Restore scrolling
  }

  // Function to toggle a section
  // Function to toggle a section
  function toggleSection(section) {
    // First close all sections
    const allSections = document.querySelectorAll(".tips-section");
    allSections.forEach((s) => {
      // Remove active class from all sections
      s.classList.remove("active");
    });

    // Open the clicked section
    section.classList.add("active");
  }

  // Function to filter tip sections based on search query
  function filterTipSections(query) {
    if (!query) {
      // If search is empty, show all sections
      document.querySelectorAll(".tips-section").forEach((section) => {
        section.style.display = "block";
      });
      return;
    }

    document.querySelectorAll(".tips-section").forEach((section) => {
      const sectionTitle = section
        .querySelector("h3")
        .textContent.toLowerCase();
      const sectionContent = section
        .querySelector(".tips-section-content")
        .textContent.toLowerCase();

      if (sectionTitle.includes(query) || sectionContent.includes(query)) {
        section.style.display = "block";
        // Optionally, open the section if it matches
        if (!section.classList.contains("active")) {
          section.classList.add("active");
        }
      } else {
        section.style.display = "none";
      }
    });
  }
});
