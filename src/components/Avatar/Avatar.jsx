export default function Avatar() {
  return (
    <div className="relative isolate flex w-full items-end justify-center">
      {/* Halo bleu : il reste derrière le PNG et se mélange au fond du Hero. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[54%] top-[43%] -z-10 h-[78%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[4.5rem]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(35,125,255,.38) 0%, rgba(37,91,190,.18) 44%, rgba(37,91,190,0) 74%)",
        }}
      />

      {/* PNG avec transparence : aucun fond rectangulaire n'est ajouté. */}
      <img
        src="/images/avatar.png"
        alt="Portrait de Serigne Abdou Khadre"
        className="
          pointer-events-none relative z-10 block h-auto w-full max-h-[76vh]
          object-contain object-bottom
          drop-shadow-[0_0_30px_rgba(36,116,255,.16)]
          [mask-image:linear-gradient(to_bottom,black_0%,black_89%,transparent_100%)]
          select-none
        "
        draggable="false"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
