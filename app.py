"""
Rithin Krishna K V - Cybersecurity Portfolio
Flask Application
"""

from flask import Flask, render_template, request, jsonify
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder='static', static_url_path='/static')
app.config['JSON_SORT_KEYS'] = False

# Project configuration
# ═══════════════════════════════════════════════════════
# ASSETS CONFIG — update these when you swap files
# ═══════════════════════════════════════════════════════
#
# To update your profile photo, icon, or resume:
# just replace the file at the path shown below,
# keeping the exact same filename and format. No code
# changes needed.
#
# Required formats:
#   - Profile photo  → .jpg only
#   - Site icon      → .png only
#   - Resume         → .pdf
#
ASSETS = {
    # Profile photo shown in the hero section.
    # Must be a .jpg file. Replace: static/img/profile-photo.jpg
    'profile_photo': '/static/img/profile-photo.jpg',

    # Site icon shown in browser tabs/bookmarks.
    # Must be a .png file. Replace: static/img/site-icon.png
    'favicon': '/static/img/site-icon.png',

    # Resume — opens in a new tab when clicked (not a forced download).
    # Replace: static/docs/resume.pdf
    'resume': '/static/docs/resume.pdf',
}

PROJECTS = [
    {
        'name': 'mshwisper',
        'url': 'https://github.com/rithinkrishnakv/mshwisper',
        'category': 'Security Tool',
        'icon': 'fas fa-microchip',
        'description': 'Modular security framework for VAPT automation. Streamlines vulnerability scanning and assessment workflows with intelligent recon pipelines.',
        'tags': ['Python', 'VAPT', 'Automation']
    },
    {
        'name': 'aegismimic',
        'url': 'https://github.com/rithinkrishnakv/aegismimic',
        'category': 'Security Tool',
        'icon': 'fas fa-shield-halved',
        'description': 'Defense simulation toolkit for testing and validating security controls against known attack patterns. Built for red-blue exercises.',
        'tags': ['Python', 'Defense', 'Simulation']
    },
    {
    'name': 'GoShadow',
    'url': 'https://github.com/rithinkrishnakv/GoShadow',
    'category': 'Security Tool',
    'icon': 'fas fa-mask',
    'description': 'A stealthy, asynchronous Command & Control (C2) framework implemented in Go utilizing Discord as a secure transport layer with obfuscated payloads.',
    'tags': ['Golang', 'C2-Framework', 'Red-Team', 'Python', 'OpSec']
    },
    {
        'name': 'Medium Publications',
        'url': 'https://medium.com/@rithinkrishnakv',
        'category': 'CTF & Research',
        'icon': 'fab fa-medium',
        'description': 'CTF write-ups, security research, and vulnerability analysis. Breaking down complex attacks into understandable steps for the community.',
        'tags': ['CTF', 'VAPT', 'Write-ups']
    }
]

CONTACT_INFO = {
    'email': 'rithinkrishnakv@gmail.com',
    'location': 'Kerala, India',
    'phone': '',  # Optional
    'links': {
        'github': 'https://github.com/rithinkrishnakv',
        'linkedin': 'https://linkedin.com/in/rithin-krishna',
        'twitter': 'https://x.com/RithinSec',
        'medium': 'https://medium.com/@rithinkrishnakv',
        'tryhackme': 'https://tryhackme.com/p/Rithinkrishna'
    }
}

ABOUT_TEXT = {
    'bio_short': 'Cybersecurity Researcher focused on VAPT & Responsible Disclosure | CTF Player',
    'bio_long': 'I\'m a cybersecurity researcher with a focus on vulnerability assessment, penetration testing, and responsible disclosure. I approach security the way a researcher approaches a problem: methodically, documenting everything, and sharing knowledge so the next person doesn\'t start from zero.\n\nMost days involve VAPT labs, CTF competitions, and building tools to automate the repetitive parts of security research. I maintain a 100-day streak on TryHackMe, constantly learning new attack vectors and defensive strategies. Every finding gets documented. Every exploit, understood.',
    'status': 'Available for security roles & collaboration',
    'streak': '100-day TryHackMe streak'
}


@app.route('/')
def index():
    """Render home page"""
    return render_template('index.html', 
                         projects=PROJECTS,
                         contact=CONTACT_INFO,
                         about=ABOUT_TEXT,
                         assets=ASSETS,
                         year=datetime.now().year)


@app.route('/api/projects')
def get_projects():
    """API endpoint for projects (JSON)"""
    return jsonify(PROJECTS)


@app.route('/api/contact')
def get_contact():
    """API endpoint for contact info (JSON)"""
    return jsonify(CONTACT_INFO)


@app.route('/sitemap.xml')
def sitemap():
    """Generate sitemap for SEO"""
    return render_template('sitemap.xml'), 200, {'Content-Type': 'application/xml'}


@app.route('/robots.txt')
def robots():
    """Generate robots.txt"""
    return render_template('robots.txt'), 200, {'Content-Type': 'text/plain'}


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return render_template('404.html'), 404


@app.errorhandler(500)
def server_error(error):
    """Handle 500 errors"""
    return render_template('500.html'), 500


if __name__ == '__main__':
    # Development server
    debug_mode = os.getenv('FLASK_ENV') == 'development'
    app.run(debug=debug_mode, host='0.0.0.0', port=5000)
