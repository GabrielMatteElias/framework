import Image from 'next/image'
import styles from './index.module.css'
import foto1 from '@/assets/foto1.png'
import foto4 from '@/assets/foto4.png'
import foto5 from '@/assets/foto5.png'
import foto6 from '@/assets/foto6.png'
import foto7 from '@/assets/foto7.png'

export function ProjectInfo({ data }) {
    return (
        <div className={styles.container}>
            <section>
                <div className={styles.gallery}>
                    <div className={styles.main_image}>
                        <Image
                            alt={'Imagem'}
                            quality={100}
                            priority
                            src={foto7}
                        />
                    </div>

                    <div className={styles.secondary_images}>
                        <Image
                            alt={'Imagem'}
                            quality={100}
                            priority
                            src={foto6}
                        />
                        <Image
                            alt={'Imagem'}
                            quality={100}
                            priority
                            src={foto5}
                        />
                        <Image
                            alt={'Imagem'}
                            quality={100}
                            priority
                            src={foto4}
                        />
                        <Image
                            alt={'Imagem'}
                            quality={100}
                            priority
                            src={foto1}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.description}>
                <p>
                    A reforma do Grand Palais em Paris visa preservar e modernizar este ícone da arquitetura Beaux-Arts,
                    inaugurado em 1900. O projeto, liderado por especialistas, restaurará a cúpula de vidro e ferro, melhorará a
                    eficiência energética e atualizará a infraestrutura para atender às normas de segurança e acessibilidade.
                    Os espaços internos serão reorganizados para maior flexibilidade, com novos acessos criados. A intervenção
                    equilibra a preservação do legado histórico com as necessidades contemporâneas.
                </p>
            </section>
        </div>
    )
}