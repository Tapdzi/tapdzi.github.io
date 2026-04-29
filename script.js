// Intersection Observer for reveal animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target); // Only animate once
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
});

// Observe all reveal elements
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .fade-in').forEach(el => {
    revealObserver.observe(el);
});

// Language translations
const translations = {
    en: {
        'nav.templates': 'Templates',
        'nav.faq': 'FAQ',
        'hero.title': 'Website templates by <span class="accent-text">Tapdzi</span>',
        'hero.subtitle': 'Ready-to-use website templates. Choose your technology and start building.',
        'hero.browse': 'Browse Templates',
        'hero.social': '<span id="githubTemplatesCount">...</span> templates on GitHub • Last update: <span id="githubLastUpdate">...</span>',
        'templates.title': 'Templates',
        'templates.subtitle': 'Click to preview',
        'card.download': 'Download',
        'features.title': 'Why our templates?',
        'features.subtitle': 'Everything you need for a quick start',
        'features.quickstart.title': 'Quick Start',
        'features.quickstart.desc': 'Start your project in minutes with ready-to-use, configured templates.',
        'features.free.title': '100% Free',
        'features.free.desc': 'All templates are open-source and free for commercial use.',
        'features.updated.title': 'Regularly Updated',
        'features.updated.desc': 'Templates are maintained with the latest library versions.',
        'features.support.title': 'Community Support',
        'features.support.desc': 'Active community and documentation for each template.',
        'about.title': 'About Me',
        'about.greeting': "Hi, I'm Tapdzi",
        'about.role': 'Indie template maker',
        'about.desc1': 'I create free templates for developers. I started with simple websites, now I help others get started with projects faster. All templates are open-source and available on GitHub.',
        'about.desc2': 'If you have an idea for a new template or want to share feedback - let me know!',
        'about.youtube': 'YouTube Channel',
        'about.github': 'GitHub Profile',
        'docs.title': 'Getting Started',
        'docs.subtitle': '3 steps to run a template',
        'docs.step1.title': 'Download',
        'docs.step1.desc': 'Click "Download" on your chosen template. The .zip file will download automatically from GitHub.',
        'docs.step2.title': 'Extract',
        'docs.step2.desc': 'Extract the archive and enter the folder. Rename the folder to your project name.',
        'docs.step3.title': 'Install',
        'docs.step3.desc': 'Install dependencies and run the dev server. Done!',
        'docs.requirements': 'Requirements: <strong>Node.js 18+</strong> and <strong>npm</strong> or <strong>yarn</strong>',
        'faq.title': 'FAQ',
        'faq.subtitle': 'Frequently asked questions',
        'faq.q1': 'Are the templates really free?',
        'faq.a1': 'Yes, all templates are 100% free and open-source. You can use them in commercial and private projects without any restrictions.',
        'faq.q2': 'Do I need to credit the source?',
        'faq.a2': 'No, we don\'t require attribution. But if you want, you can give a star on GitHub - it\'s a nice way to support the project.',
        'faq.q3': 'How often are they updated?',
        'faq.a3': 'I try to update templates every few months when new framework versions are released. I always check if everything works before releasing an update.',
        'faq.q4': 'Can I modify a template?',
        'faq.a4': 'Sure! That\'s the whole point - you have full freedom. A template is just a starting point, adapt it to your needs.',
        'faq.q5': 'How can I help with the project?',
        'faq.a5': 'You can: report a bug on GitHub, propose a new feature, or create a pull request with a fix. Any help is appreciated!',
        'footer.tagline': 'Ready-to-use web templates. Choose, download, build.',
        'footer.templates': 'Templates',
        'footer.about': 'About',
        'footer.faq': 'FAQ',
        'footer.copyright': '&copy; 2025 Tapdzi. All rights reserved.'
    },
    de: {
        'nav.templates': 'Vorlagen',
        'nav.faq': 'FAQ',
        'hero.title': 'Website-Vorlagen von <span class="accent-text">Tapdzi</span>',
        'hero.subtitle': 'Fertige Website-Vorlagen. Wählen Sie Ihre Technologie und beginnen Sie zu bauen.',
        'hero.browse': 'Vorlagen durchsuchen',
        'hero.social': '<span id="githubTemplatesCount">...</span> Vorlagen auf GitHub • Letztes Update: <span id="githubLastUpdate">...</span>',
        'templates.title': 'Vorlagen',
        'templates.subtitle': 'Klicken Sie für Vorschau',
        'card.download': 'Herunterladen',
        'features.title': 'Warum unsere Vorlagen?',
        'features.subtitle': 'Alles was Sie für einen schnellen Start brauchen',
        'features.quickstart.title': 'Schneller Start',
        'features.quickstart.desc': 'Starten Sie Ihr Projekt in Minuten mit fertigen, konfigurierten Vorlagen.',
        'features.free.title': '100% Kostenlos',
        'features.free.desc': 'Alle Vorlagen sind Open-Source und kostenlos für die kommerzielle Nutzung.',
        'features.updated.title': 'Regelmäßig aktualisiert',
        'features.updated.desc': 'Vorlagen werden mit den neuesten Bibliotheksversionen gewartet.',
        'features.support.title': 'Community-Support',
        'features.support.desc': 'Aktive Community und Dokumentation für jede Vorlage.',
        'about.title': 'Über mich',
        'about.greeting': 'Hallo, ich bin Tapdzi',
        'about.role': 'Indie-Template-Maker',
        'about.desc1': 'Ich erstelle kostenlose Vorlagen für Entwickler. Ich begann mit einfachen Websites, jetzt helfe ich anderen, schneller mit Projekten zu starten. Alle Vorlagen sind Open-Source und auf GitHub verfügbar.',
        'about.desc2': 'Wenn Sie eine Idee für eine neue Vorlage haben oder Feedback teilen möchten - lassen Sie es mich wissen!',
        'about.youtube': 'YouTube-Kanal',
        'about.github': 'GitHub-Profil',
        'docs.title': 'Erste Schritte',
        'docs.subtitle': '3 Schritte zum Ausführen einer Vorlage',
        'docs.step1.title': 'Herunterladen',
        'docs.step1.desc': 'Klicken Sie auf "Herunterladen" bei Ihrer gewählten Vorlage. Die .zip-Datei wird automatisch von GitHub heruntergeladen.',
        'docs.step2.title': 'Extrahieren',
        'docs.step2.desc': 'Extrahieren Sie das Archiv und öffnen Sie den Ordner. Benennen Sie den Ordner in Ihren Projektnamen um.',
        'docs.step3.title': 'Installieren',
        'docs.step3.desc': 'Installieren Sie die Abhängigkeiten und starten Sie den Dev-Server. Fertig!',
        'docs.requirements': 'Anforderungen: <strong>Node.js 18+</strong> und <strong>npm</strong> oder <strong>yarn</strong>',
        'faq.title': 'FAQ',
        'faq.subtitle': 'Häufig gestellte Fragen',
        'faq.q1': 'Sind die Vorlagen wirklich kostenlos?',
        'faq.a1': 'Ja, alle Vorlagen sind 100% kostenlos und Open-Source. Sie können sie in kommerziellen und privaten Projekten ohne Einschränkungen verwenden.',
        'faq.q2': 'Muss ich die Quelle angeben?',
        'faq.a2': 'Nein, wir verlangen keine Namensnennung. Aber wenn Sie möchten, können Sie auf GitHub einen Stern geben - das ist ein netter Weg, das Projekt zu unterstützen.',
        'faq.q3': 'Wie oft werden sie aktualisiert?',
        'faq.a3': 'Ich versuche, Vorlagen alle paar Monate zu aktualisieren, wenn neue Framework-Versionen veröffentlicht werden. Ich prüfe immer, ob alles funktioniert, bevor ich ein Update veröffentliche.',
        'faq.q4': 'Kann ich eine Vorlage ändern?',
        'faq.a4': 'Sicher! Das ist genau der Punkt - Sie haben volle Freiheit. Eine Vorlage ist nur ein Ausgangspunkt, passen Sie sie an Ihre Bedürfnisse an.',
        'faq.q5': 'Wie kann ich beim Projekt helfen?',
        'faq.a5': 'Sie können: einen Bug auf GitHub melden, ein neues Feature vorschlagen oder einen Pull Request mit einer Korrektur erstellen. Jede Hilfe ist willkommen!',
        'footer.tagline': 'Fertige Web-Vorlagen. Wählen, herunterladen, bauen.',
        'footer.templates': 'Vorlagen',
        'footer.about': 'Über mich',
        'footer.faq': 'FAQ',
        'footer.copyright': '&copy; 2025 Tapdzi. Alle Rechte vorbehalten.'
    },
    es: {
        'nav.templates': 'Plantillas',
        'nav.faq': 'FAQ',
        'hero.title': 'Plantillas de sitios web por <span class="accent-text">Tapdzi</span>',
        'hero.subtitle': 'Plantillas de sitios web listas para usar. Elija su tecnología y comience a construir.',
        'hero.browse': 'Explorar plantillas',
        'hero.social': '<span id="githubTemplatesCount">...</span> plantillas en GitHub • Última actualización: <span id="githubLastUpdate">...</span>',
        'templates.title': 'Plantillas',
        'templates.subtitle': 'Haga clic para previsualizar',
        'card.download': 'Descargar',
        'features.title': '¿Por qué nuestras plantillas?',
        'features.subtitle': 'Todo lo que necesita para un inicio rápido',
        'features.quickstart.title': 'Inicio rápido',
        'features.quickstart.desc': 'Inicie su proyecto en minutos con plantillas listas para usar y configuradas.',
        'features.free.title': '100% Gratis',
        'features.free.desc': 'Todas las plantillas son de código abierto y gratuitas para uso comercial.',
        'features.updated.title': 'Actualizadas regularmente',
        'features.updated.desc': 'Las plantillas se mantienen con las últimas versiones de las bibliotecas.',
        'features.support.title': 'Soporte de la comunidad',
        'features.support.desc': 'Comunidad activa y documentación para cada plantilla.',
        'about.title': 'Acerca de mí',
        'about.greeting': 'Hola, soy Tapdzi',
        'about.role': 'Creador indie de plantillas',
        'about.desc1': 'Creo plantillas gratuitas para desarrolladores. Comencé con sitios web simples, ahora ayudo a otros a comenzar con proyectos más rápido. Todas las plantillas son de código abierto y están disponibles en GitHub.',
        'about.desc2': 'Si tiene una idea para una nueva plantilla o desea compartir comentarios - ¡hágamelo saber!',
        'about.youtube': 'Canal de YouTube',
        'about.github': 'Perfil de GitHub',
        'docs.title': 'Cómo empezar',
        'docs.subtitle': '3 pasos para ejecutar una plantilla',
        'docs.step1.title': 'Descargar',
        'docs.step1.desc': 'Haga clic en "Descargar" en la plantilla elegida. El archivo .zip se descargará automáticamente de GitHub.',
        'docs.step2.title': 'Extraer',
        'docs.step2.desc': 'Extraiga el archivo y entre en la carpeta. Cambie el nombre de la carpeta al nombre de su proyecto.',
        'docs.step3.title': 'Instalar',
        'docs.step3.desc': 'Instale las dependencias y ejecute el servidor de desarrollo. ¡Listo!',
        'docs.requirements': 'Requisitos: <strong>Node.js 18+</strong> y <strong>npm</strong> o <strong>yarn</strong>',
        'faq.title': 'FAQ',
        'faq.subtitle': 'Preguntas frecuentes',
        'faq.q1': '¿Las plantillas son realmente gratuitas?',
        'faq.a1': 'Sí, todas las plantillas son 100% gratuitas y de código abierto. Puede usarlas en proyectos comerciales y privados sin restricciones.',
        'faq.q2': '¿Necesito dar crédito a la fuente?',
        'faq.a2': 'No, no requerimos atribución. Pero si desea, puede dar una estrella en GitHub: es una buena manera de apoyar el proyecto.',
        'faq.q3': '¿Con qué frecuencia se actualizan?',
        'faq.a3': 'Intento actualizar las plantillas cada pocos meses cuando se lanzan nuevas versiones de frameworks. Siempre verifico que todo funcione antes de lanzar una actualización.',
        'faq.q4': '¿Puedo modificar una plantilla?',
        'faq.a4': '¡Claro! Ese es el punto: tiene total libertad. Una plantilla es solo un punto de partida, adáptela a sus necesidades.',
        'faq.q5': '¿Cómo puedo ayudar con el proyecto?',
        'faq.a5': 'Puede: reportar un error en GitHub, proponer una nueva función, o crear un pull request con una corrección. ¡Cualquier ayuda es apreciada!',
        'footer.tagline': 'Plantillas web listas para usar. Elija, descargue, construya.',
        'footer.templates': 'Plantillas',
        'footer.about': 'Acerca de',
        'footer.faq': 'FAQ',
        'footer.copyright': '&copy; 2025 Tapdzi. Todos los derechos reservados.'
    },
    fr: {
        'nav.templates': 'Modèles',
        'nav.faq': 'FAQ',
        'hero.title': 'Modèles de sites web par <span class="accent-text">Tapdzi</span>',
        'hero.subtitle': 'Modèles de sites web prêts à l\'emploi. Choisissez votre technologie et commencez à construire.',
        'hero.browse': 'Parcourir les modèles',
        'hero.social': '<span id="githubTemplatesCount">...</span> modèles sur GitHub • Dernière mise à jour : <span id="githubLastUpdate">...</span>',
        'templates.title': 'Modèles',
        'templates.subtitle': 'Cliquez pour prévisualiser',
        'card.download': 'Télécharger',
        'features.title': 'Pourquoi nos modèles?',
        'features.subtitle': 'Tout ce dont vous avez besoin pour un démarrage rapide',
        'features.quickstart.title': 'Démarrage rapide',
        'features.quickstart.desc': 'Démarrez votre projet en quelques minutes avec des modèles prêts à l\'emploi et configurés.',
        'features.free.title': '100% Gratuit',
        'features.free.desc': 'Tous les modèles sont open-source et gratuits pour un usage commercial.',
        'features.updated.title': 'Mise à jour régulière',
        'features.updated.desc': 'Les modèles sont maintenus avec les dernières versions des bibliothèques.',
        'features.support.title': 'Support communautaire',
        'features.support.desc': 'Communauté active et documentation pour chaque modèle.',
        'about.title': 'À propos de moi',
        'about.greeting': 'Salut, je suis Tapdzi',
        'about.role': 'Créateur indie de modèles',
        'about.desc1': 'Je crée des modèles gratuits pour les développeurs. J\'ai commencé avec des sites web simples, maintenant j\'aide les autres à démarrer plus rapidement avec des projets. Tous les modèles sont open-source et disponibles sur GitHub.',
        'about.desc2': 'Si vous avez une idée pour un nouveau modèle ou souhaitez partager des commentaires - faites-le moi savoir!',
        'about.youtube': 'Chaîne YouTube',
        'about.github': 'Profil GitHub',
        'docs.title': 'Commencer',
        'docs.subtitle': '3 étapes pour exécuter un modèle',
        'docs.step1.title': 'Télécharger',
        'docs.step1.desc': 'Cliquez sur "Télécharger" sur le modèle choisi. Le fichier .zip sera téléchargé automatiquement depuis GitHub.',
        'docs.step2.title': 'Extraire',
        'docs.step2.desc': 'Extrayez l\'archive et entrez dans le dossier. Renommez le dossier avec le nom de votre projet.',
        'docs.step3.title': 'Installer',
        'docs.step3.desc': 'Installez les dépendances et lancez le serveur de développement. C\'est prêt!',
        'docs.requirements': 'Configuration requise: <strong>Node.js 18+</strong> et <strong>npm</strong> ou <strong>yarn</strong>',
        'faq.title': 'FAQ',
        'faq.subtitle': 'Questions fréquentes',
        'faq.q1': 'Les modèles sont-ils vraiment gratuits?',
        'faq.a1': 'Oui, tous les modèles sont 100% gratuits et open-source. Vous pouvez les utiliser dans des projets commerciaux et privés sans aucune restriction.',
        'faq.q2': 'Dois-je créditer la source?',
        'faq.a2': 'Non, nous n\'exigeons pas d\'attribution. Mais si vous le souhaitez, vous pouvez donner une étoile sur GitHub - c\'est un bon moyen de soutenir le projet.',
        'faq.q3': 'À quelle fréquence sont-ils mis à jour?',
        'faq.a3': 'J\'essaie de mettre à jour les modèles tous les quelques mois lorsque de nouvelles versions de frameworks sont publiées. Je vérifie toujours que tout fonctionne avant de publier une mise à jour.',
        'faq.q4': 'Puis-je modifier un modèle?',
        'faq.a4': 'Bien sûr! C\'est tout l\'intérêt - vous avez une liberté totale. Un modèle est juste un point de départ, adaptez-le à vos besoins.',
        'faq.q5': 'Comment puis-je aider le projet?',
        'faq.a5': 'Vous pouvez: signaler un bug sur GitHub, proposer une nouvelle fonctionnalité, ou créer un pull request avec une correction. Toute aide est appréciée!',
        'footer.tagline': 'Modèles web prêts à l\'emploi. Choisissez, téléchargez, construisez.',
        'footer.templates': 'Modèles',
        'footer.about': 'À propos',
        'footer.faq': 'FAQ',
        'footer.copyright': '&copy; 2025 Tapdzi. Tous droits réservés.'
    },
    zh: {
        'nav.templates': '模板',
        'nav.faq': '常见问题',
        'hero.title': '<span class="accent-text">Tapdzi</span> 的网站模板',
        'hero.subtitle': '即用型网站模板。选择您的技术并开始构建。',
        'hero.browse': '浏览模板',
        'hero.social': 'GitHub 上有 <span id="githubTemplatesCount">...</span> 个模板 • 最后更新：<span id="githubLastUpdate">...</span>',
        'templates.title': '模板',
        'templates.subtitle': '点击预览',
        'card.download': '下载',
        'features.title': '为什么选择我们的模板?',
        'features.subtitle': '快速入门所需的一切',
        'features.quickstart.title': '快速开始',
        'features.quickstart.desc': '使用现成的、已配置的模板在几分钟内启动您的项目。',
        'features.free.title': '100% 免费',
        'features.free.desc': '所有模板都是开源的,可免费用于商业用途。',
        'features.updated.title': '定期更新',
        'features.updated.desc': '模板使用最新的库版本进行维护。',
        'features.support.title': '社区支持',
        'features.support.desc': '每个模板都有活跃的社区和文档。',
        'about.title': '关于我',
        'about.greeting': '嗨,我是 Tapdzi',
        'about.role': '独立模板创作者',
        'about.desc1': '我为开发者创建免费模板。我从简单的网站开始,现在帮助其他人更快地开始项目。所有模板都是开源的,可在 GitHub 上获得。',
        'about.desc2': '如果您有新模板的想法或想分享反馈 - 请告诉我!',
        'about.youtube': 'YouTube 频道',
        'about.github': 'GitHub 主页',
        'docs.title': '入门指南',
        'docs.subtitle': '运行模板的 3 个步骤',
        'docs.step1.title': '下载',
        'docs.step1.desc': '在您选择的模板上点击"下载"。.zip 文件将从 GitHub 自动下载。',
        'docs.step2.title': '解压',
        'docs.step2.desc': '解压存档并进入文件夹。将文件夹重命名为您的项目名称。',
        'docs.step3.title': '安装',
        'docs.step3.desc': '安装依赖项并运行开发服务器。完成!',
        'docs.requirements': '要求: <strong>Node.js 18+</strong> 和 <strong>npm</strong> 或 <strong>yarn</strong>',
        'faq.title': '常见问题',
        'faq.subtitle': '常见问题解答',
        'faq.q1': '模板真的免费吗?',
        'faq.a1': '是的,所有模板都是 100% 免费和开源的。您可以在商业和私人项目中无限制地使用它们。',
        'faq.q2': '我需要注明来源吗?',
        'faq.a2': '不,我们不要求署名。但如果您愿意,可以在 GitHub 上给个星 - 这是支持项目的好方法。',
        'faq.q3': '它们多久更新一次?',
        'faq.a3': '当发布新的框架版本时,我尝试每隔几个月更新一次模板。在发布更新之前,我总是检查一切是否正常工作。',
        'faq.q4': '我可以修改模板吗?',
        'faq.a4': '当然!这正是重点 - 您有完全的自由。模板只是一个起点,根据您的需求进行调整。',
        'faq.q5': '我如何帮助项目?',
        'faq.a5': '您可以:在 GitHub 上报告错误,提出新功能,或创建带有修复的 pull request。任何帮助都是受欢迎的!',
        'footer.tagline': '即用型 Web 模板。选择,下载,构建。',
        'footer.templates': '模板',
        'footer.about': '关于',
        'footer.faq': '常见问题',
        'footer.copyright': '&copy; 2025 Tapdzi. 版权所有。'
    },
    ja: {
        'nav.templates': 'テンプレート',
        'nav.faq': 'FAQ',
        'hero.title': '<span class="accent-text">Tapdzi</span> のウェブサイトテンプレート',
        'hero.subtitle': 'すぐに使えるウェブサイトテンプレート。技術を選んで構築を始めましょう。',
        'hero.browse': 'テンプレートを閲覧',
        'hero.social': 'GitHub のテンプレート数: <span id="githubTemplatesCount">...</span> • 最終更新: <span id="githubLastUpdate">...</span>',
        'templates.title': 'テンプレート',
        'templates.subtitle': 'クリックしてプレビュー',
        'card.download': 'ダウンロード',
        'features.title': 'なぜ私たちのテンプレート?',
        'features.subtitle': '素早く始めるために必要なすべて',
        'features.quickstart.title': 'クイックスタート',
        'features.quickstart.desc': 'すぐに使える設定済みのテンプレートで数分でプロジェクトを開始できます。',
        'features.free.title': '100% 無料',
        'features.free.desc': 'すべてのテンプレートはオープンソースで、商用利用も無料です。',
        'features.updated.title': '定期的に更新',
        'features.updated.desc': 'テンプレートは最新のライブラリバージョンで維持されています。',
        'features.support.title': 'コミュニティサポート',
        'features.support.desc': '各テンプレートにはアクティブなコミュニティとドキュメントがあります。',
        'about.title': '私について',
        'about.greeting': 'こんにちは、Tapdzi です',
        'about.role': 'インディーのテンプレート制作者',
        'about.desc1': '私は開発者のための無料テンプレートを作成しています。シンプルなウェブサイトから始め、今では他の人がプロジェクトをより早く始められるよう助けています。すべてのテンプレートはオープンソースで、GitHub で利用可能です。',
        'about.desc2': '新しいテンプレートのアイデアがある場合やフィードバックを共有したい場合は - お知らせください!',
        'about.youtube': 'YouTube チャンネル',
        'about.github': 'GitHub プロフィール',
        'docs.title': '始め方',
        'docs.subtitle': 'テンプレートを実行する 3 つのステップ',
        'docs.step1.title': 'ダウンロード',
        'docs.step1.desc': '選択したテンプレートで「ダウンロード」をクリックします。.zip ファイルが GitHub から自動的にダウンロードされます。',
        'docs.step2.title': '展開',
        'docs.step2.desc': 'アーカイブを展開してフォルダに入ります。フォルダ名をプロジェクト名に変更します。',
        'docs.step3.title': 'インストール',
        'docs.step3.desc': '依存関係をインストールして開発サーバーを実行します。完了!',
        'docs.requirements': '要件: <strong>Node.js 18+</strong> および <strong>npm</strong> または <strong>yarn</strong>',
        'faq.title': 'FAQ',
        'faq.subtitle': 'よくある質問',
        'faq.q1': 'テンプレートは本当に無料ですか?',
        'faq.a1': 'はい、すべてのテンプレートは 100% 無料でオープンソースです。制限なしで商用および個人プロジェクトで使用できます。',
        'faq.q2': 'ソースを明記する必要がありますか?',
        'faq.a2': 'いいえ、帰属は要求しません。ただし、希望する場合は GitHub でスターを付けることができます - プロジェクトをサポートする良い方法です。',
        'faq.q3': 'どのくらいの頻度で更新されますか?',
        'faq.a3': '新しいフレームワークバージョンがリリースされるとき、数ヶ月ごとにテンプレートを更新しようとします。更新をリリースする前に、すべてが正常に機能するか常に確認します。',
        'faq.q4': 'テンプレートを変更できますか?',
        'faq.a4': 'もちろん! それがポイントです - 完全な自由があります。テンプレートは単なる出発点であり、ニーズに合わせて調整してください。',
        'faq.q5': 'プロジェクトをどのように手伝うことができますか?',
        'faq.a5': 'できます:GitHub でバグを報告する、新機能を提案する、または修正を含むプルリクエストを作成する。どんな助けも歓迎します!',
        'footer.tagline': 'すぐに使えるウェブテンプレート。選択、ダウンロード、構築。',
        'footer.templates': 'テンプレート',
        'footer.about': '私について',
        'footer.faq': 'FAQ',
        'footer.copyright': '&copy; 2025 Tapdzi. 全著作権所有。'
    },
    pl: {
        'nav.templates': 'Template\'y',
        'nav.faq': 'FAQ',
        'hero.title': 'Szablony stron od <span class="accent-text">Tapdzi</span>',
        'hero.subtitle': 'Gotowe template\'y do stron internetowych. Wybierz technologię i zacznij budować.',
        'hero.browse': 'Przeglądaj template\'y',
        'hero.social': '<span id="githubTemplatesCount">...</span> template\'ów na GitHubie • Ostatnia aktualizacja: <span id="githubLastUpdate">...</span>',
        'templates.title': 'Template\'y',
        'templates.subtitle': 'Kliknij aby zobaczyć podgląd',
        'card.download': 'Pobierz',
        'features.title': 'Dlaczego nasze template\'y?',
        'features.subtitle': 'Wszystko czego potrzebujesz do szybkiego startu',
        'features.quickstart.title': 'Szybki start',
        'features.quickstart.desc': 'Rozpocznij projekt w kilka minut z gotowymi, skonfigurowanymi szablonami.',
        'features.free.title': '100% Darmowe',
        'features.free.desc': 'Wszystkie template\'y są open-source i darmowe do użytku komercyjnego.',
        'features.updated.title': 'Regularnie aktualizowane',
        'features.updated.desc': 'Template\'y są utrzymywane z najnowszymi wersjami bibliotek.',
        'features.support.title': 'Wsparcie społeczności',
        'features.support.desc': 'Aktywna społeczność i dokumentacja dla każdego szablonu.',
        'about.title': 'O mnie',
        'about.greeting': 'Cześć, jestem Tapdzi',
        'about.role': 'Niezależny twórca template\'ów',
        'about.desc1': 'Tworzę darmowe template\'y dla developerów. Zaczynałem od prostych stron, teraz pomagam innym szybciej startować z projektami. Wszystkie szablony są open-source i dostępne na GitHubie.',
        'about.desc2': 'Jeśli masz pomysł na nowy template lub chcesz się podzielić feedbackiem - daj znać!',
        'about.youtube': 'Kanał YouTube',
        'about.github': 'Profil GitHub',
        'docs.title': 'Jak zacząć',
        'docs.subtitle': '3 kroki do uruchomienia template\'u',
        'docs.step1.title': 'Pobierz',
        'docs.step1.desc': 'Kliknij "Pobierz" przy wybranym template\'cie. Plik .zip pobierze się automatycznie z GitHuba.',
        'docs.step2.title': 'Rozpakuj',
        'docs.step2.desc': 'Wypakuj archiwum i wejdź do folderu. Zmień nazwę folderu na nazwę swojego projektu.',
        'docs.step3.title': 'Zainstaluj',
        'docs.step3.desc': 'Zainstaluj zależności i uruchom dev server. Gotowe!',
        'docs.requirements': 'Wymagania: <strong>Node.js 18+</strong> i <strong>npm</strong> lub <strong>yarn</strong>',
        'faq.title': 'FAQ',
        'faq.subtitle': 'Najczęściej zadawane pytania',
        'faq.q1': 'Czy template\'y są naprawdę darmowe?',
        'faq.a1': 'Tak, wszystkie template\'y są 100% darmowe i open-source. Możesz używać ich w projektach komercyjnych i prywatnych bez żadnych ograniczeń.',
        'faq.q2': 'Czy muszę podawać źródło?',
        'faq.a2': 'Nie, nie wymagamy podawania źródła. Ale jeśli chcesz, możesz dać gwiazdkę na GitHubie - to fajny sposób na wsparcie projektu.',
        'faq.q3': 'Jak często są aktualizowane?',
        'faq.a3': 'Staram się aktualizować template\'y co kilka miesięcy, gdy wychodzą nowe wersje frameworków. Zawsze sprawdzam czy wszystko działa przed wypuszczeniem update\'u.',
        'faq.q4': 'Mogę zmodyfikować template?',
        'faq.a4': 'Jasne! To jest właśnie cel - masz pełną swobodę. Template to tylko punkt wyjścia, dostosuj go do swoich potrzeb.',
        'faq.q5': 'Jak mogę pomóc w projekcie?',
        'faq.a5': 'Możesz: zgłosić buga na GitHubie, zaproponować nowy feature, lub stworzyć pull request z poprawką. Każda pomoc jest mile widziana!',
        'footer.tagline': 'Gotowe template\'y webowe. Wybierz, pobierz, buduj.',
        'footer.templates': 'Template\'y',
        'footer.about': 'O mnie',
        'footer.faq': 'FAQ',
        'footer.copyright': '&copy; 2025 Tapdzi. Wszystkie prawa zastrzeżone.'
    }
};

let currentLang = 'en';

// Language dropdown functionality
const langBtn = document.getElementById('langBtn');
const langDropdown = document.querySelector('.lang-dropdown');
const langCurrent = document.getElementById('langCurrent');
const langOptions = document.querySelectorAll('.lang-option');

// Toggle dropdown
langBtn.addEventListener('click', () => {
    langDropdown.classList.toggle('open');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove('open');
    }
});

// Handle language selection
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        currentLang = selectedLang;
        langCurrent.textContent = selectedLang.toUpperCase();
        updateLanguage(selectedLang);
        langDropdown.classList.remove('open');
        
        // Update active state
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
    });
});

// Set initial active state
document.querySelector(`.lang-option[data-lang="${currentLang}"]`).classList.add('active');

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    loadGitHubTemplatesCount();
}

async function loadGitHubTemplatesCount() {
    const templatesEl = document.getElementById('githubTemplatesCount');
    const lastUpdateEl = document.getElementById('githubLastUpdate');
    if (!templatesEl && !lastUpdateEl) return;

    try {
        const [userResponse, latestRepoResponse] = await Promise.all([
            fetch('https://api.github.com/users/tapdzi'),
            fetch('https://api.github.com/users/tapdzi/repos?sort=pushed&per_page=1')
        ]);

        if (!userResponse.ok || !latestRepoResponse.ok) {
            throw new Error(`GitHub API request failed: ${userResponse.status}/${latestRepoResponse.status}`);
        }

        const user = await userResponse.json();
        const latestRepos = await latestRepoResponse.json();
        const latestPushedAt = latestRepos[0]?.pushed_at;

        if (templatesEl) {
            templatesEl.textContent = `${user.public_repos || 0}+`;
        }
        if (lastUpdateEl) {
            if (latestPushedAt) {
                const date = new Date(latestPushedAt);
                lastUpdateEl.textContent = date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
            } else {
                lastUpdateEl.textContent = 'N/A';
            }
        }
    } catch (error) {
        if (templatesEl) templatesEl.textContent = '0';
        if (lastUpdateEl) lastUpdateEl.textContent = 'N/A';
        console.error('Could not load GitHub profile stats:', error);
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Templates tech filter (compact menu + jump to section)
const techFilterButtons = document.querySelectorAll('.tech-filter-btn');
const techSections = document.querySelectorAll('.category-section[data-tech]');

function applyTechFilter(selectedTech) {
    techFilterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tech-filter') === selectedTech);
    });

    techSections.forEach(section => {
        const tech = section.getAttribute('data-tech');
        const shouldShow = tech === selectedTech;
        section.classList.toggle('hidden-tech', !shouldShow);
    });
}

techFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedTech = btn.getAttribute('data-tech-filter');
        applyTechFilter(selectedTech);
    });
});

applyTechFilter('react');


// 3D Mouse tilt effect for hero about card
const heroAboutCard = document.querySelector('.hero-about');

if (heroAboutCard) {
    heroAboutCard.addEventListener('mousemove', (e) => {
        const rect = heroAboutCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -9;
        const rotateY = ((x - centerX) / centerX) * 10;

        heroAboutCard.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        heroAboutCard.style.boxShadow = '0 22px 42px rgba(13, 16, 34, 0.42)';
    });

    heroAboutCard.addEventListener('mouseleave', () => {
        heroAboutCard.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
        heroAboutCard.style.boxShadow = '0 14px 34px rgba(13, 16, 34, 0.32)';
    });
}

// Preview Modal
function openPreview(previewName) {
    const modal = document.getElementById('previewModal');
    const img = document.getElementById('previewModalImg');
    img.src = `previews/${previewName}.png`;
    modal.classList.add('active');
}

function closePreview() {
    const modal = document.getElementById('previewModal');
    modal.classList.remove('active');
}

// Expose for inline HTML handlers
window.openPreview = openPreview;
window.closePreview = closePreview;

// Smooth FAQ animation
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        // Close all other items
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
            if (openItem !== item) {
                openItem.classList.remove('open');
            }
        });
        
        // Toggle current item
        item.classList.toggle('open', !isOpen);
    });
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePreview();
        document.querySelectorAll('.faq-item.open').forEach(item => {
            item.classList.remove('open');
        });
    }
});

// Close preview modal on outside click
window.addEventListener('click', (e) => {
    const previewModal = document.getElementById('previewModal');
    if (e.target === previewModal) {
        closePreview();
    }
});

// Template card loading skeleton + empty preview state
document.querySelectorAll('.template-card').forEach(card => {
    const previewImg = card.querySelector('.card-preview-img img');
    if (!previewImg) return;

    card.classList.add('loading');

    const clearLoading = () => {
        card.classList.remove('loading');
    };

    if (previewImg.complete) {
        if (!previewImg.naturalWidth) {
            card.classList.add('image-error');
        }
        clearLoading();
        return;
    }

    previewImg.addEventListener('load', clearLoading, { once: true });
    previewImg.addEventListener('error', () => {
        card.classList.add('image-error');
        clearLoading();
    }, { once: true });
});

loadGitHubTemplatesCount();

// Hide loader on window load
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    document.body.classList.remove('is-loading');
    if (!loader) return;

    loader.classList.add('hidden');
    window.setTimeout(() => {
        loader.remove();
    }, 400);
});

// Fallback: force hide loader after 3 seconds max
window.setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    document.body.classList.remove('is-loading');
    if (loader) {
        loader.classList.add('hidden');
        window.setTimeout(() => {
            loader.remove();
        }, 400);
    }
}, 3000);
