import { Rect } from "./objects";

export class Maths {
	/**
	 * Clamps a value between min and max
	 * @param {number} value
	 * @param {number} min
	 * @param {number} max
	 */
	public static clamp(value, min, max): number {
		 return Math.min(Math.max(value, min), max);
	}

	public static lerp(min, max, t) {
		return min + (max - min) * t;
	}

	public static rand(min, max): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	public static smoothDamp(current, target, $currentVelocity, smoothTime, maxSpeed, deltaTime): number {
		smoothTime = Math.max(0.0001, smoothTime);
		const num = 2.0 / smoothTime;
		const num2 = num * deltaTime;
		const num3 = 1.0 / (1.0 + num2 + 0.48 * num2 * num2 + 0.235 * num2 * num2 * num2);
		let num4 = current - target;
		const num5 = target;
		const num6 = maxSpeed * smoothTime;
		num4 = Maths.clamp(num4, -num6, num6);
		target = current - num4;
		const num7 = ($currentVelocity.cv + num * num4) * deltaTime;
		$currentVelocity.cv = ($currentVelocity.cv - num * num7) * num3;
		let num8 = target + (num4 + num7) * num3;
		if ((num5 - current > 0.0) === (num8 > num5)) {
			num8 = num5;
			$currentVelocity.cv = (num8 - num5) / deltaTime;
		}
		return num8;
	}

	public static RectIntersect(rect1: Rect, rect2: Rect): boolean {
		if (rect1.x <= rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x &&
			rect1.y <= rect2.y + rect2.height &&
			rect1.height + rect1.y >= rect2.y
		) {
			return true;
		}
		return false;
	}
}
