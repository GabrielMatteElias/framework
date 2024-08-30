import { Container } from '@/components/Container';
import styles from './page.module.css'
import { ProjectInfo } from './components/info';
import AvatarImageGroup from '@/components/AvatarGroup';

import gabriel from '@/assets/gabriel_arquiteto.png'
import fernando from '@/assets/fernando_arquiteto.png'
import bernardo from '@/assets/bernardo_arquiteto.png'
import ProfileAvatar from '@/components/Avatar';

const contributors = [
    {
        name: "Gabriel Matte Elias",
        img: gabriel
    },
    {
        name: "Fernando dos Santos Fagundes",
        img: fernando
    },
    {
        name: "Bernardo da Rosa Pinheiro",
        img: bernardo
    },
    {
        name: "João Vicente Utzig",
        img: null
    },
    {
        name: "Gabriel Matte Elias",
        img: gabriel
    },
    {
        name: "Fernando dos Santos Fagundes",
        img: fernando
    },
    {
        name: "Bernardo da Rosa Pinheiro",
        img: bernardo
    },
    {
        name: "João Vicente Utzig",
        img: null
    },
    {
        name: "Gabriel Matte Elias",
        img: gabriel
    },
    {
        name: "Fernando dos Santos Fagundes",
        img: fernando
    },
    {
        name: "Bernardo da Rosa Pinheiro",
        img: bernardo
    },
    {
        name: "João Vicente Utzig",
        img: null
    },
]

export const metadata = {
    title: "Le Grand Palais - Gabriel Matte Elias",
    description: "Project Le Grand Palais by Gabriel Matte Elias",
};

export default function ({ params }) {

    return (
        <main>
            <Container>
                <section className={styles.project_content}>
                    <h1>
                        Reforma do Le Grand Palais
                    </h1>

                    <div>
                        <ul className={styles.info}>
                            <li>72000m²</li>
                            <li> • Paris, França</li>
                            <li> • 2015</li>
                        </ul>
                    </div>
                </section>
                <ProjectInfo />
                <section className={styles.architect_content}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <ProfileAvatar
                            image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/250px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg'
                            name='Chatillon Architectes'
                            width={90}
                            height={90} />
                    </div>
                    <p>Chatillon Architectes</p>
                </section>

                <section className={styles.contributors}>
                    <div>
                        <h2>Project contributors</h2>
                    </div>
                    <div className={styles.contributors_profile}></div>
                    <AvatarImageGroup avatars={contributors} />
                </section>
            </Container>
        </main>
    )
}