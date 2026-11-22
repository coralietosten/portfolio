import Techno from '../Techno/Techno';
import './Competences.css';

const groupes = {
    fr: [
        { nom: 'Data ingénieurie', elements: ['Apache Spark', 'Architecture Médaillon', 'Parquet', 'Pipelines de données', 'ETL', 'Nettoyage de données','Qualité de données'] },
        { nom: 'IA et Machine Learning', elements: ['IA générative', 'RAG', 'LLM', 'Embeddings', 'Ollama', 'Transformers','Random Forest', 'Régression', 'Clustering', 'Réseau de neuronnes', 'Séries temporelles','évaluation de modèles'] },
        { nom: 'Bases de données & outils', elements: ['Python', 'Pandas', 'SQL', 'SQLite', 'PostgreSQL', 'Oracle', 'Docker', 'Git', 'Jupyter Notebook'] },
        { nom: 'Développement', elements: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'Express', 'Java', 'C/C++', 'API REST'] },
    ],
    en: [
        { nom: 'Data ingénieurie', elements: ['Apache Spark', 'Medalion architecture', 'Parquet', 'Data Pipelines', 'ETL', 'Data cleaning','Data quality'] },
        { nom: 'IA et Machine Learning', elements: ['Generative AI', 'RAG', 'LLM', 'Embeddings', 'Ollama', 'Transformers','Random Forest', 'Regression', 'Clustering', 'Neural Network', 'Times series','Models evaluation'] },
        { nom: 'Databases & tools', elements: ['Python', 'Pandas', 'SQL','SQLite', 'PostgreSQL', 'Oracle', 'Docker', 'Git', 'Jupyter Notebook'] },
        { nom: 'Development', elements: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'Express', 'Java', 'C/C++', 'REST API'] },
    ],
};

function Competences({ language }) {
    return (
        <div className="skills-grid">
            {groupes[language].map((groupe) => (
                <article className="skill-group" key={groupe.nom}>
                    <h3>{groupe.nom}</h3>
                    <div className="skill-tags">
                        {groupe.elements.map((element) => (
                            <Techno key={element} nom={element} />
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Competences;