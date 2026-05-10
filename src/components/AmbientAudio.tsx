import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";


export function AmbientAudio() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; oscs: OscillatorNode[] } | null>(null);

  useEffect(() => {
    return () => {
      nodesRef.current?.oscs.forEach((o) => o.stop());
      ctxRef.current?.close();
    };
  }, []);

  const start = async () => {
    if (!ctxRef.current) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      ctxRef.current = ctx;
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 900;
      filter.Q.value = 0.6;
      filter.connect(master);

      const freqs = [55, 82.4, 110, 164.8, 220];
      const oscs = freqs.map((f, i) => {
        const o = ctx.createOscillator();
        o.type = i % 2 === 0 ? "sine" : "triangle";
        o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.value = 0.06 / (i + 1);
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.05 + i * 0.03;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 0.03;
        lfo.connect(lfoGain).connect(g.gain);
        lfo.start();
        o.connect(g).connect(filter);
        o.start();
        return o;
      });
      nodesRef.current = { gain: master, oscs };
    }
    const ctx = ctxRef.current!;
    if (ctx.state === "suspended") await ctx.resume();
    nodesRef.current!.gain.gain.cancelScheduledValues(ctx.currentTime);
    nodesRef.current!.gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 1.6);
  };
  const stop = () => {
    const ctx = ctxRef.current;
    if (!ctx || !nodesRef.current) return;
    nodesRef.current.gain.gain.cancelScheduledValues(ctx.currentTime);
    nodesRef.current.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
  };

  const toggle = () => {
    setOn((v) => {
      const next = !v;
      if (next) start();
      else stop();
      return next;
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      className="fixed bottom-6 right-6 z-50 size-12 rounded-full glass grid place-items-center text-foreground/80 hover:text-accent-primary transition-colors ease-cinematic group"
    >
      <span className="absolute inset-0 rounded-full ring-1 ring-accent-primary/0 group-hover:ring-accent-primary/40 transition-all" />
      {on ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
      {on && <span className="absolute -inset-1 rounded-full bg-accent-primary/10 pulse-soft -z-10" />}
    </button>
  );
}
