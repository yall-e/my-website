import Container from "@/components/shared/container";

export default function Work() {
  return (
    <Container size="large">
      <main className="prose prose-neutral dark:prose-invert">
        <header>
          <p>
            I'm curious. Distributed systems, Privacy, and Artificial Intelligence.
          </p>
          <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        </header>

        <section>
          <article>
            <header>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                Blockchain Labs, Inc
              </h2>
              <time className="text-neutral-600 dark:text-neutral-400 text-sm">
                Software Engineer, 2024 — present
              </time>
            </header>
            <p>
              At Blockchain Labs Inc., I have been actively involved in the design and development of secure cryptographic systems and blockchain developer tools, focusing on open-source technologies and privacy-enhancing cryptographic protocols.
            </p>
            <ul>
              <li>
                Designed and implemented "bip-tools", a production-grade Rust library and CLI tool for hierarchical deterministic (HD) wallet operations. 
                The tool supports BIP32/BIP44 standards and enables efficient derivation and management of xpubs and cryptocurrency addresses across various formats.
              </li>
              <li>
                Built a Go-based MPC framework supporting 4-party threshold ECDSA key generation (DKG), signing, and Publicly Verifiable Encryption (PVE) for secure key backup and recovery. Designed flexible access structures using AND/OR/THRESHOLD policies to control key usage and access rights.
              </li>
              <li>
                Contributed to secure multi-party cryptographic protocol implementations, including distributed key generation and threshold signing, while ensuring the codebase remains modular, testable, and aligned with cryptographic best practices.
              </li>
              <li>
                Collaborated across cryptography, software engineering, and product teams to deliver secure and reusable cryptographic primitives for real-world blockchain use cases.
              </li>
            </ul>
          </article>

          <article>
            <header>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                Freelance
              </h2>
              <time className="text-neutral-600 dark:text-neutral-400 text-sm">
                Software Developer, 2020 — 2024
              </time>
            </header>
            <p>
              As a freelance developer, I have worked on diverse projects across blockchain, embedded systems, emulation, and machine learning, delivering practical and innovative solutions through clean and reliable code.
            </p>
            <ul>
              <li>
                Built a CHIP-8 emulator in Rust, replicating the architecture and instruction set of the classic virtual machine. The project leverages Rust’s safety and performance features to run vintage CHIP-8 programs and games in a highly performant environment.
              </li>
              <li>Developed VoGuard, an anti-counterfeit system that combines NFC-enabled clothing and blockchain technology. Designed smart contracts in TypeScript for the Solana blockchain using compressed NFTs (cNFTs) to assign each physical item a verifiable digital identity.</li>
              <li>
                Created a staking and rewards system for Crypto Airlines on Solana. The smart contract allows users to stake tokens into customizable pools, distributing rewards securely and efficiently. Built with a strong focus on authorization logic, performance, and on-chain cost optimization.
              </li>
              <li>
                Worked on NFC integration, embedding small, wash-resistant chips into garments to create scannable, verifiable IDs—bridging physical products with blockchain metadata. Ensured secure interaction between NFC readers and the blockchain backend.
              </li>
              <li>
                Built a machine learning model for Iris flower classification using Python, pandas, and scikit-learn. Performed data preprocessing, visualization, and training of classification algorithms to distinguish between Iris species based on petal and sepal measurements.
              </li>
            </ul>
          </article>
        </section>
      </main>
    </Container>
  );
}
