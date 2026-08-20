import { useRef, useEffect } from "react";

const Noise = ({
  mode,
  patternRefreshInterval = 3,
  patternAlpha = 15,
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      // Determine if dark mode is active
      const isDark =
        mode === "dark" ||
        document.documentElement.classList.contains("dark");
      
      // Black pixels (0) for light mode, White pixels (255) for dark mode
      const rgbValue = isDark ? 255 : 0;

      for (let i = 0; i < data.length; i += 4) {
        data[i] = rgbValue;
        data[i + 1] = rgbValue;
        data[i + 2] = rgbValue;
        data[i + 3] = Math.random() * patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [mode, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      ref={grainRef}
      className="pointer-events-none fixed inset-0 w-full h-full z-[9990] opacity-50"
      style={{ imageRendering: "pixelated" }}
    />
  );
};

export default Noise;
